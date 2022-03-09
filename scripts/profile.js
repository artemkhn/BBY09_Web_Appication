function writeCards() {
    //define a variable for the collection you want to create in Firestore to populate data
    var cardsRef = db.collection("mygems");

    cardsRef.add({
        name: "Kissa Tanto", //replace with your own city?
        city: "Vancouver",
        province: "BC",
        patio: "Yes",
        price: "$$$",
        description: "Italian-Japanese cuisine & cocktails served in a chic space inspired by 1960's Tokyo jazz cafes."
    });
    cardsRef.add({
        name: "Tacofino Taco Bar", //replace with your own city?
        city: "Vancouver",
        province: "BC",
        price: "$",
        description: "Casual, contemporary restaurant with West coast takes on classic Mexican food & a full bar."
    });
    cardsRef.add({
        name: "Lunch Lady", //replace with your own city?
        city: "Vancouver",
        province: "BC",
        price: "$$",
        description: "Casual eatery offering Vietnamese staples such as pho, noodles & meat plates, plus unique cocktails."
    });
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
                newcard.querySelector('.card-image').src = "./images/" + collection + ".jpg"; //hikes.jpg

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

