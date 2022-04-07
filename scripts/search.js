var gemsRef = db.collection("restaurants");

var query = gemsRef.where("city", "==", "Vancouver");
function searchVancouver() {
    db.collection("restaurants").where("city", "==", "Vancouver")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var name = doc.data().name; // get value of the "name" key
            var description = doc.data().description; // get value of the "details" key
            var gemID = doc.data().id; //gets the unique ID field
            var image = doc.data().image;
            var city = doc.data().city;
            var province = doc.data().province;
            var patio = doc.data().patio;
            var reservation = doc.data().reservation;
            var likes = doc.data().likes;

            //update title and text and image
            var testGemCard = cardTemplate.content.cloneNode(true);
            testGemCard.querySelector('.card-title').innerHTML = name;
            testGemCard.querySelector('.card-length').innerHTML = description;
            testGemCard.querySelector('a').onclick = () => setLikeData(gemID);
            testGemCard.querySelector('i').onclick = () => addLikes(gemID);
            testGemCard.querySelector('.read-more').href = "/html/eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation + "&likes=" + likes;
            testGemCard.querySelector('img').src = "/images/" + image + ".jpg";

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
                var image = doc.data().image;
                var city = doc.data().city;
                var province = doc.data().province;
                var patio = doc.data().patio;
                var reservation = doc.data().reservation;
                var likes = doc.data().likes;

                //update title and text and image
                var testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('a').onclick = () => setLikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('.read-more').href = "/html/eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation + "&likes=" + likes;
                testGemCard.querySelector('img').src = "/images/" + image + ".jpg";

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
                var image = doc.data().image;
                var city = doc.data().city;
                var province = doc.data().province;
                var patio = doc.data().patio;
                var reservation = doc.data().reservation;
                var likes = doc.data().likes;

                //update title and text and image
                var testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('a').onclick = () => setLikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('.read-more').href = "/html/eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation + "&likes=" + likes;
                testGemCard.querySelector('img').src = "/images/" + image + ".jpg";

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
                var image = doc.data().image;
                var city = doc.data().city;
                var province = doc.data().province;
                var patio = doc.data().patio;
                var reservation = doc.data().reservation;
                var likes = doc.data().likes;

                //update title and text and image
                var testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('a').onclick = () => setLikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('.read-more').href = "/html/eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation + "&likes=" + likes;
                testGemCard.querySelector('img').src = "/images/" + image + ".jpg";

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
                var image = doc.data().image;
                var city = doc.data().city;
                var province = doc.data().province;
                var patio = doc.data().patio;
                var reservation = doc.data().reservation;
                var likes = doc.data().likes;

                //update title and text and image
                var testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('a').onclick = () => setLikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('.read-more').href = "/html/eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation + "&likes=" + likes;
                testGemCard.querySelector('img').src = "/images/" + image + ".jpg";


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
                var image = doc.data().image;
                var city = doc.data().city;
                var province = doc.data().province;
                var patio = doc.data().patio;
                var reservation = doc.data().reservation;
                var likes = doc.data().likes;

                //update title and text and image
                var testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('a').onclick = () => setLikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('.read-more').href = "/html/eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation + "&likes=" + likes;
                testGemCard.querySelector('img').src = "/images/" + image + ".jpg";
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
                var image = doc.data().image;
                var city = doc.data().city;
                var province = doc.data().province;
                var patio = doc.data().patio;
                var reservation = doc.data().reservation;
                var likes = doc.data().likes;

                //update title and text and image
                var testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('a').onclick = () => setLikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('.read-more').href = "/html/eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation + "&likes=" + likes;
                testGemCard.querySelector('img').src = "/images/" + image + ".jpg";


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
                var image = doc.data().image;
                var city = doc.data().city;
                var province = doc.data().province;
                var patio = doc.data().patio;
                var reservation = doc.data().reservation;
                var likes = doc.data().likes;

                //update title and text and image
                var testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('a').onclick = () => setLikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('.read-more').href = "/html/eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation + "&likes=" + likes;
                testGemCard.querySelector('img').src = "/images/" + image + ".jpg";


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