
var currentPost;

function fillInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentPost = db.collection("mygems").doc(user.uid)
            //get the document for current user.
            currentPost.get()
                .then(mygemsDoc => {
                    //get the data fields of the user
                    var postName = mygemsDoc.data().name;
                    var postDesc = mygemsDoc.data().description;
                    var postCity = mygemsDoc.data().city;
                    var postPrice = mygemsDoc.data().price;
                    var postRes = mygemsDoc.data().reservation;
                    var postPatio = mygemsDoc.data().patio;

                    //if the data fields are not empty, then write them in to the form.
                    if (postName != null) {
                        document.getElementById("nameInput").value = postName;
                    }
                    if (postDesc != null) {
                        document.getElementById("descInput").value = postDesc;
                    }
                    if (userCity != null) {
                        document.getElementById("cityInput").value = postCity;
                    }
                    if (userPrice != null) {
                        document.getElementById("priceInput").value = postPrice;
                    }
                    if (userRes != null) {
                        document.getElementById("resInput").value = postRes;
                    }
                    if (userPatio != null) {
                        document.getElementById("patioInput").value = postPatio;
                    }
                })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

//call the function to run it 
fillInfo();

function editUserPost() {
    //Enable the form fields
    document.getElementById('personalPostFields').disabled = false;
 }

 function saveUserPost() {
    postName = document.getElementById('nameInput').value;
    postDesc = document.getElementById('descInput').value;
    postCity = document.getElementById('cityInput').value;
    postCity = document.getElementById('priceInput').value;
    postCity = document.getElementById('resInput').value;
    postCity = document.getElementById('patioInput').value;

    currentUser.update({
            name: postName,
            description: postDesc,
            city: postCity,
            price: postPrice,
            reservation: postRes,
            patio: postPatio

        })
        .then(() => {
            console.log("Document successfully updated!");
        })

    //Enable the form fields
    document.getElementById('personalPostFields').disabled = true;
}