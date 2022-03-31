function showDetails() {

    let params = new URL(window.location.href);
    let id = params.searchParams.get("id");               //parse "id"
    let gemName = params.searchParams.get("gemName");   //parse "collection"
    let gemDescription = params.searchParams.get("description");
    let gemImage = params.searchParams.get("image");
    let city = params.searchParams.get("city");
    let province = params.searchParams.get("province");
    let patio = params.searchParams.get("patio");
    let reservation = params.searchParams.get("reservation");
    let likes = params.searchParams.get("likes");

    let gemLikes = "&nbsp Likes:" + likes;
    let gemReservation = "&nbsp Reservation needed:" + reservation;
    let gemPatio = "&nbsp Patio:" + patio;
    let gemProvince = "&nbsp Province:" + province;
    let gemCity = "&nbsp Location: " + city + "," + province;
    let idTag = "&nbsp ID:" + id;           //build message to display
    let descriptionTag = gemDescription;
    document.getElementById("gemName").innerHTML = gemName;  
    document.getElementById("idGoesHere").innerHTML = idTag;
    document.getElementById("descriptionGoesHere").innerHTML = descriptionTag;
    document.getElementById("img").src = "/images/" + gemImage + ".jpg";
    document.getElementById("city").innerHTML = gemCity;
    document.getElementById("province").innerHTML = gemProvince;
    document.getElementById("patio").innerHTML = gemPatio;
    document.getElementById("reservation").innerHTML = gemReservation;
    document.getElementById("likes").innerHTML = gemLikes;
}
showDetails();