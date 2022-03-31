var currentUser;

function populateProfile() {
    firebase.auth().onAuthStateChanged(user => {

        if (user) {

            currentUser = db.collection("users").doc(user.uid)

            currentUser.get()
                .then(userDoc => {
                    var userName = userDoc.data().name;
                    var userUserName = userDoc.data().username;
                    var userEmail = userDoc.data().email;
                    var userPhone = userDoc.data().phone;
                    
                    
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    
                    if (userUserName != null) {
                        document.getElementById("usernameInput").value = userUserName;
                    }
                    
                    if (userEmail != null) {
                        document.getElementById("emailInput").value = userEmail;
                    }
                    
                    if (userPhone != null) {
                        document.getElementById("phoneInput").value = userPhone;
                    }
                })
        } else {
            console.log("No user is signed in");
        }
    });
}

populateProfile();


function editUserProfile() {
    //Enable the form fields
    document.getElementById('profilefeilds').disabled = false;
 }

 function saveUserProfile() {
    userName = document.getElementById('nameInput').value;
    userUserName = document.getElementById('usernameInput').value;
    userEmail = document.getElementById('emailInput').value;
    userPhone = document.getElementById('phoneInput').value;

    currentUser.update({
            name: userName,
            username: userUserName,
            email: userEmail,
            phone: userPhone
        })
        .then(() => {
            console.log("Document successfully updated!");
        })

    //Enable the form fields
    document.getElementById('profilefeilds').disabled = true;
}

