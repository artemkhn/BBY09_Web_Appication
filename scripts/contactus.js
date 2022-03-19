function writeSupport() {
    let subject = document.getElementById("subject").value;
    let description = document.getElementById("description").value;

    let urgent = document.querySelector('input[name="urgent"]:checked').value;
   
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid);
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    // Start a new collection and add all data in it.
                    db.collection("SupportRequests").add({
                        
                        User: userID,
                        Subject: subject,
                        Description: description,
                        Urgency: urgent
                    })
                    .then(function(){

                        window.location.href = "index.html";
                    });
                })
        } else {
            // No user is signed in.
            console.log("no user signed in");
        }
    });

}