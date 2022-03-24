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

function displayCards(collection) {
    let cardTemplate = document.getElementById("cardTemplate");

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { //iterate thru each doc
                var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = name;
                newcard.querySelector('.card-text').innerHTML = description;
                newcard.querySelector('.card-image').src = "./images/" + name + ".jpg"; 

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}
displayCards("mygems");

function uploadGemPic() {
    // Let's assume my storage is only enabled for authenticated users 
    // This is set in your firebase console storage "rules" tab

    

    firebase.auth().onAuthStateChanged(function (user) {
        var fileInput = document.getElementById("gempicfile");   // pointer #1
        const image = document.getElementById("mypic-goes-here"); // pointer #2

        // listen for file selection
        fileInput.addEventListener('change', function (e) {
            var file = e.target.files[0];
            var blob = URL.createObjectURL(file);
            image.src = blob;            // display this image

            //store using this name
            var storageRef = storage.ref("images/" + user.uid + ".jpg"); 

            //upload the picked file
            storageRef.put(file) 
                .then(function(){
                    console.log('Uploaded to Cloud Storage.');
                })

						//get the URL of stored file
            storageRef.getDownloadURL()
                .then(function (url) {   // Get URL of the uploaded file
                    console.log(url);    // Save the URL into users collection
                    db.collection("users").doc(user.uid).update({
                        "profilePic": url
                    })
                    .then(function(){
                        console.log('Added Profile Pic URL to Firestore.');
                    })
                })
        })
    })
}
uploadGemPic();

function displayUserProfilePic() {
    console.log("hi");
    firebase.auth().onAuthStateChanged(function (user) {      //get user object
        db.collection("users").doc(user.uid)                  //use user's uid
            .get()                                            //READ the doc
            .then(function (doc) {
                var picUrl = doc.data().profilePic;           //extract pic url

								// use this line if "mypicdiv" is a "div"
                //$("#mypicdiv").append("<img src='" + picUrl + "'>")
                
								// use this line if "mypic-goes-here" is an "img" 
								$("#image-goes-here").attr("src", picUrl);
            })
    })
}
displayUserProfilePic();