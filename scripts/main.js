//inserts the name of the logged in user to the specified location in html
function insertName() {
    //checks if the user is logged in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {                                                                 
            console.log(user.uid);
            currentUser = db.collection("users").doc(user.uid);
            //gets the current user
            currentUser.get()
                  .then(userDoc => {
               var user_Name = userDoc.data().name;
               console.log(user_Name);

               $(".name-goes-here").text(user_Name);                        
            })
        } else {
        }
    });
}
insertName(); 

//inserts the email of the logged in user to the specified location in html
function insertEmail() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {                                                                 
            console.log(user.uid);
            currentUser = db.collection("users").doc(user.uid);
            //gets the current user email
            currentUser.get()
                  .then(userDoc => {
               var user_Email = userDoc.data().email;
               console.log(user_Email);
        
               $(".email-goes-here").text(user_Email);                         
            })
        } else {
        }
    });
}
insertEmail(); 