//gets information from the user and stores in database
function writeSupport() {
    let subject = document.getElementById("subject").value;
    let description = document.getElementById("description").value;

    let urgent = document.querySelector('input[name="urgent"]:checked').value;
    
    //makes sure the user is loged in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid);
            var userID = user.uid;
            currentUser.get()
                //iterates through each user
                .then(userDoc => {
                    //adds request to the collection
                    db.collection("SupportRequests").add({
                        
                        User: userID,
                        Subject: subject,
                        Description: description,
                        Urgency: urgent
                    })
                    .then(function(){

                        window.location.href = "thankyoureq.html";
                    });
                })
        } else {
            console.log("no user signed in");
        }
    });

}