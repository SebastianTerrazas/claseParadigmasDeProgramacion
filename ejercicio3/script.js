function changeImage() {
    element = document.getElementById("foco")
    if(element.src.match("focoOn")) {
        element.src="images/focoOff.png";
    }
    else {
        element.src="images/focoOn.png"
    }

    

}