function writeCards() {
    var cardsRef = db.collection("restaurants");

    cardsRef.add({
        code: "010",
        name: "Time & Place", 
        city: "Burnaby",
        province: "BC",
        price: "$$",
        description: "Time & Place is the place to gather and graze over an array of mains, sharable plates, and casual handhelds all prepared to perfection."
    });
    cardsRef.add({
        code: "011",
        name: "Isami Sushi", 
        city: "Surrey",
        province: "BC",
        price: "$$",
        description: "Straightforward Japanese restaurant serving sushi, sashimi & hot entrees like teriyaki & tempura."
    });
    cardsRef.add({
        code: "012",
        name: "Tenen Restaurant", 
        city: "Burnaby",
        province: "BC",
        price: "$$",
        description: "Eastern European specialties are presented in a cozy antiques-filled room with a back patio."
    });
}

function displayCards() {
    let cardTemplate = document.getElementById("cardTemplate");
    let gemCardGroup = document.getElementById("gemCardGroup");


    db.collection("restaurants").get()
        .then(allRestaurants => {
            allRestaurants.forEach(doc => { //iterate thru each doc
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
                testGemCard.querySelector('.read-more').href = "eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation + "&likes=" + likes;
                testGemCard.querySelector('img').src = "/images/" + image + ".jpg";

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                gemCardGroup.appendChild(testGemCard);
            })
        })

}

function setLikeData(code) {
    localStorage.setItem('gemID', id);
}

function addLikes(gemID) {
    console.log("inside");
    db.collection("restaurants").where("id", "==", gemID)
        .get()
        .then(queryRestaurant => {
            size = queryRestaurant.size;
            restaurants = queryRestaurant.docs;
            if (size = 1) {
                id = restaurants[0].id;
                console.log(id);
                db.collection("restaurants").doc(id).update({
                    //Firebase documentation has this method for incrementation.
                    likes: firebase.firestore.FieldValue.increment(1)
                })

            } else {
                console.log("Query has more than one data")
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

function displayLikes(id) {
    db.collection("restaurants").doc(id)
        .onSnapshot({
            includeMetadataChanges: true
        }, (doc) => {
            // ...
        });
}



