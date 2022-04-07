// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            var user = authResult.user;    
            //if a new user, adds the user to the database                        
            if (authResult.additionalUserInfo.isNewUser) {         
                db.collection("users").doc(user.uid).set({         
                        name: user.displayName,                    
                        email: user.email   
                                            
                    }).then(function () {
                        console.log("New user added to firestore");
                        window.location.assign("../index.html");       
                    })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
            } else {
                return true;
            }
            return false;
        },
        uiShown: function () {
            document.getElementById('loader').style.display = 'none';
        }
    },
    signInFlow: 'popup',
    signInSuccessUrl: '../index.html',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '<your-tos-url>',
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);

