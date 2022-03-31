function uploadUserPic() {
    // Let's assume my storage is only enabled for authenticated users 
    // This is set in your firebase console storage "rules" tab



    firebase.auth().onAuthStateChanged(function (user) {
        var fileInput = document.getElementById("gempicfile"); // pointer #1
        const image = document.getElementById("mypic-goes-here"); // pointer #2

        // listen for file selection
        fileInput.addEventListener('change', function (e) {
            var file = e.target.files[0];
            var blob = URL.createObjectURL(file);
            image.src = blob; // display this image

            //store using this name
            var storageRef = storage.ref("images/" + user.uid + ".jpg");

            //upload the picked file
            storageRef.child("file.jpg").put(file)
                .then(function  (snap) {
                    console.log('Uploaded to Cloud Storage.');
                    storageRef.getDownloadURL()
                        .then(function (url) { // Get URL of the uploaded file
                            console.log(url); // Save the URL into users collection
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

function displayUserProfilePic() {
    console.log("hi");
    firebase.auth().onAuthStateChanged(function (user) { //get user object
        db.collection("users").doc(user.uid) //use user's uid
            .get() //READ the doc
            .then(function (doc) {
                var picUrl = doc.data().profilePic; //extract pic url

                // use this line if "mypicdiv" is a "div"
                //$("#mypicdiv").append("<img src='" + picUrl + "'>")

                // use this line if "mypic-goes-here" is an "img" 
                $("#image-goes-here").attr("src", picUrl);
            })
    })
}
displayUserProfilePic();