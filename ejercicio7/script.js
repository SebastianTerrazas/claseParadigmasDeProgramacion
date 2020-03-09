window.onload = function () {

	document.getElementById("gender").addEventListener('change', welcoming);

	function welcoming() {
		alert("hey");
		var name = document.getElementById("name").value;
		var gender = document.getElementById("gender").value;

		document.getElementById(wel).innerHTML = `Bienvenid${gender $ a : o} ${name}` ;
	}
}