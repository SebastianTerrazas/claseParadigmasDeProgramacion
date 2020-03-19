// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var table = [document.getElementById("m1i"),
			document.getElementById("m2i"),
			document.getElementById("m3i"),
			document.getElementById("m4i"),
			document.getElementById("m5i"),
			document.getElementById("m6i")]

// When the user clicks the button, open the modal 
const openModal = tab => {
	console.log("test" + table[tab-1].src);
	if (table[tab-1].src.match("tableOn"))
  		modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}