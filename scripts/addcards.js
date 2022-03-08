function writeReview() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let price = document.getElementById("price").value;
    let Description = document.getElementById("description").value;

    let patio = document.querySelector('input[name="patio"]:checked').value;
    let reservation = document.querySelector('input[name="reservation"]:checked').value;

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid);
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    // Start a new collection and add all data in it.
                    db.collection("mygems").add({
                        user: userID,
                        name: name,
                        city: city,
                        price: price,
                        description: Description,
                        patio: patio,
                        reservation: reservation
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

