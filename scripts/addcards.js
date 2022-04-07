//Stores the information added by the user and addss to the firebase
function writeReview() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let price = document.getElementById("price").value;
    let Description = document.getElementById("description").value;
    let image = document.getElementById("image").value;


    let patio = document.querySelector('input[name="patio"]:checked').value;
    let reservation = document.querySelector('input[name="reservation"]:checked').value;

    //checks if the user is logged in
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid);
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    // Creates a new collection and add the inputed information
                    db.collection("mygems").add({
                            user: userID,
                            name: name,
                            city: city,
                            price: price,
                            description: Description,
                            patio: patio,
                            reservation: reservation,
                            image: image
                        })
                        .then(function () {

                            window.location.href = "thankyoupost.html";
                        });
                })
        } else {
            // No user is logged in.
            console.log("no user signed in");
        }
    });

}


