function writeCards() {
    //define a variable for the collection you want to create in Firestore to populate data
    var cardsRef = db.collection("restaurants");

    cardsRef.add({
        code: "001",
        name: "Kissa Tanto", //replace with your own city?
        city: "Vancouver",
        province: "BC",
        price: "$$$",
        description: "Italian-Japanese cuisine & cocktails served in a chic space inspired by 1960's Tokyo jazz cafes."
    });
    cardsRef.add({
        code: "002",
        name: "Tacofino Taco Bar", //replace with your own city?
        city: "Vancouver",
        province: "BC",
        price: "$",
        description: "Casual, contemporary restaurant with West coast takes on classic Mexican food & a full bar."
    });
    cardsRef.add({
        code: "003",
        name: "Lunch Lady", //replace with your own city?
        city: "Vancouver",
        province: "BC",
        price: "$$",
        description: "Casual eatery offering Vietnamese staples such as pho, noodles & meat plates, plus unique cocktails."
    });
}

function displayCards() {
    let cardTemplate = document.getElementById("cardTemplate");
    let hikeCardGroup = document.getElementById("hikeCardGroup");

    db.collection("restaurants").get()
        .then(allRestaurants => {
            allRestaurants.forEach(doc => { //iterate thru each doc
                var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                var gemID = doc.data().id; //gets the unique ID field
                var likes = doc.data().likes;
                var newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                let testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.likes-slot').innerHTML = likes;
                testGemCard.querySelector('a').onclick = () => setHikeData(gemID);
                testGemCard.querySelector('i').onclick = () => addLikes(gemID);
                testGemCard.querySelector('img').src = `./images/${gemID}.jpg`;

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                GemCardGroup.appendChild(testGemCard);
            })
        })

}

displayCards();
function setHikeData(code){
    localStorage.setItem ('gemID', id);
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