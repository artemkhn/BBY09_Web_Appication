function displayCards(collection) {
    let cardTemplate = document.getElementById("cardTemplate");

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { //iterate thru each doc
                var name = doc.data().name; // get value of the "name" key
                var description = doc.data().description; // get value of the "details" key
                var gemID = doc.data().id; //gets the unique ID field
                var image = doc.data().image;
                var city = doc.data().city;
                var province = doc.data().province;
                var patio = doc.data().patio;
                var reservation = doc.data().reservation;
                var likes = doc.data().likes;

                var testGemCard = cardTemplate.content.cloneNode(true);
                testGemCard.querySelector('.card-title').innerHTML = name;
                testGemCard.querySelector('.card-length').innerHTML = description;
                testGemCard.querySelector('.read-more').href = "eachGem-profile.html?gemName=" + name + "&description=" + description + "&image=" + image + "&city=" + city + "&province=" + province + "&patio=" + patio + "&reservation=" + reservation;
                testGemCard.querySelector('img').src = "/images/" + image + ".jpg";

                document.getElementById(collection + "-go-here").appendChild(testGemCard);
                i++;
            })
        })
}
displayCards("mygems");