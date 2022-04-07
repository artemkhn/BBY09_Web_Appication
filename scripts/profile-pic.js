//uploads image choosed by the user to the database 
function uploadUserPic() {

    firebase.auth().onAuthStateChanged(function (user) {
        var fileInput = document.getElementById("gempicfile"); 
        const image = document.getElementById("mypic-goes-here"); 

        fileInput.addEventListener('change', function (e) {
            var file = e.target.files[0];
            var blob = URL.createObjectURL(file);
            image.src = blob; 

            var storageRef = storage.ref("images/" + user.uid + ".jpg");

            storageRef.put(file)
                .then(function  (snap) {
                    console.log('Uploaded to Cloud Storage.');
                    storageRef.getDownloadURL()
                        .then(function (url) { 
                            console.log(url); 
                            db.collection("users").doc(user.uid).update({
                                    "profilePic": url
                                })
                                .then(function () {
                                    console.log('Added Profile Pic URL to Firestore.');
                                })
                        })
                })
        })
    })
}
uploadUserPic();

//displays the image from the database to the user loged in
function displayUserProfilePic() {
    console.log("hi");
    firebase.auth().onAuthStateChanged(function (user) { 
        db.collection("users").doc(user.uid) 
            .get() 
            .then(function (doc) {
                var picUrl = doc.data().profilePic; 

                $("#image-goes-here").attr("src", picUrl);
            })
    })
}
displayUserProfilePic();