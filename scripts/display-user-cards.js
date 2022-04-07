//Displayes the posts added by the specific user
function displayCards(collection) {
    let cardTemplate = document.getElementById("cardTemplate");

    db.collection(collection).get()
        //iterates through eact gem
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { 
                var name = doc.data().name; 
                var description = doc.data().description; 
                var gemID = doc.data().id; 
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
                //creates a new card with gem
                document.getElementById(collection + "-go-here").appendChild(testGemCard);
                i++;
            })
        })
}
displayCards("mygems");