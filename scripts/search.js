//Searches for restaurants only in vancouver
function searchVancouver() {
    db.collection("restaurants").where("city", "==", "Vancouver")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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

//Searches for restaurants in Burnaby 
function searchBurnaby() {
    db.collection("restaurants").where("city", "==", "Burnaby")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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

//Searches for restaurants in Langley
function searchLangley() {
    db.collection("restaurants").where("city", "==", "Langley")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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

function searchSurrey() {
    db.collection("restaurants").where("city", "==", "Surrey")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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

//Searches for restaurants with single $ sign
function search$() {
    db.collection("restaurants").where("price", "==", "$")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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

//Searches for restaurants with $$ sign
function search$$() {
    db.collection("restaurants").where("price", "==", "$$")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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

//Searches for restaurants with $$$ sign
function search$$$() {
    db.collection("restaurants").where("price", "==", "$$$")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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

//Searches for restaurants with $$$$ sign
function search$$$$() {
    db.collection("restaurants").where("price", "==", "$$$$")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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