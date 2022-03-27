function showDetails() {

    let params = new URL(window.location.href);
    let id = params.searchParams.get("id");               //parse "id"
    let gemName = params.searchParams.get("gemName");   //parse "collection"
    let gemDescription = params.searchParams.get("description");
    let gemImage = params.searchParams.get("image");

    let idTag = "&nbsp ID:" + id;           //build message to display
    let descriptionTag = "&nbsp Description:" + gemDescription;
    document.getElementById("gemName").innerHTML = gemName;  
    document.getElementById("idGoesHere").innerHTML = idTag;
    document.getElementById("descriptionGoesHere").innerHTML = descriptionTag;
    document.getElementById("img").src = "/images/" + gemImage + ".jpg";
}
showDetails();