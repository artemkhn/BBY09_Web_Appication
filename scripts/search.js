var gemsRef = db.collection("restaurants");

var query = gemsRef.where("city", "==", "Vancouver");
function searchVancouver() {
    db.collection("restaurants").where("city", "==", "Vancouver")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "description" key
                var gemID = doc.data().id; //gets the unique ID field
                var likes = doc.data().likes;

                //update title and text and image
                let testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.likes-slot').innerHTML = likes;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('img').src = `/images/${gemID}.jpg`;

                gemCardGroup.appendChild(testGemCard);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

function searchBurnaby() {
    db.collection("restaurants").where("city", "==", "Burnaby")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                var gemID = doc.data().id; //gets the unique ID field
                var likes = doc.data().likes;

                //update title and text and image
                let testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.likes-slot').innerHTML = likes;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('img').src = `/images/${gemID}.jpg`;

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                gemCardGroup.appendChild(testGemCard);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

function searchLangley() {
    db.collection("restaurants").where("city", "==", "Langley")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                var gemID = doc.data().id; //gets the unique ID field
                var likes = doc.data().likes;

                //update title and text and image
                let testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.likes-slot').innerHTML = likes;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('img').src = `/images/${gemID}.jpg`;

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                gemCardGroup.appendChild(testGemCard);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

function searchSurrey() {
    db.collection("restaurants").where("city", "==", "Surrey")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                var gemID = doc.data().id; //gets the unique ID field
                var likes = doc.data().likes;

                //update title and text and image
                let testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.likes-slot').innerHTML = likes;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('img').src = `/images/${gemID}.jpg`;

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                gemCardGroup.appendChild(testGemCard);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

function search$() {
    db.collection("restaurants").where("price", "==", "$")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                var gemID = doc.data().id; //gets the unique ID field
                var likes = doc.data().likes;

                //update title and text and image
                let testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.likes-slot').innerHTML = likes;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('img').src = `/images/${gemID}.jpg`;

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                gemCardGroup.appendChild(testGemCard);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

function search$$() {
    db.collection("restaurants").where("price", "==", "$$")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                var gemID = doc.data().id; //gets the unique ID field
                var likes = doc.data().likes;

                //update title and text and image
                let testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.likes-slot').innerHTML = likes;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('img').src = `/images/${gemID}.jpg`;

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                gemCardGroup.appendChild(testGemCard);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

function search$$$() {
    db.collection("restaurants").where("price", "==", "$$$")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                var gemID = doc.data().id; //gets the unique ID field
                var likes = doc.data().likes;

                //update title and text and image
                let testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.likes-slot').innerHTML = likes;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('img').src = `/images/${gemID}.jpg`;

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                gemCardGroup.appendChild(testGemCard);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

function search$$$$() {
    db.collection("restaurants").where("price", "==", "$$$$")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                var gemID = doc.data().id; //gets the unique ID field
                var likes = doc.data().likes;

                //update title and text and image
                let testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.likes-slot').innerHTML = likes;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('img').src = `/images/${gemID}.jpg`;

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                gemCardGroup.appendChild(testGemCard);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}