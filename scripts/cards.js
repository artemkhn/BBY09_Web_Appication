function writeCards() {
    //define a variable for the collection you want to create in Firestore to populate data
    var cardsRef = db.collection("restaurants");

    cardsRef.add({
        code: "010",
        name: "Time & Place", //replace with your own city?
        city: "Burnaby",
        province: "BC",
        price: "$$",
        description: "Time & Place is the place to gather and graze over an array of mains, sharable plates, and casual handhelds all prepared to perfection."
    });
    cardsRef.add({
        code: "011",
        name: "Isami Sushi", //replace with your own city?
        city: "Surrey",
        province: "BC",
        price: "$$",
        description: "Straightforward Japanese restaurant serving sushi, sashimi & hot entrees like teriyaki & tempura."
    });
    cardsRef.add({
        code: "012",
        name: "Tenen Restaurant", //replace with your own city?
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
                var likes = doc.data().likes;
                var image = doc.data().image

                //update title and text and image
                var testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('.read-more').href = "eachGem.html?gemName="+name +"&id=" + gemID + "&description=" + description + "&image=" + image;
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

function setHikeData(code) {
    localStorage.setItem('gemID', id);
}

function addLikes(gemID) {
    console.log("inside");
    db.collection("restaurants").where("id", "==", gemID)
        .get()
        .then(queryRestaurant => {
            //see how many results you have got from the query
            size = queryRestaurant.size;
            // get the documents of query
            restaurants = queryRestaurant.docs;
            if (size = 1) {
                id = restaurants[0].id;
                console.log(id);
                //update method will add to the specified field in database, if that field does not exist, it will create that.
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



