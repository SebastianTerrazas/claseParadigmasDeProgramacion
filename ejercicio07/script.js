window.onload = function () {
    
    /* event listener */
    document.getElementsByName("gender")[0].addEventListener('change', doThing);
    
    /* function */
    function doThing(){
      	console.log('Horray!');
      	var name = document.getElementById("name").value;
      	console.log(name);
		var gender = document.getElementById("gender").value;
		console.log(gender);

		document.getElementById("wel").innerHTML = `Bienvenid${ (gender=='F') ? `a` : (gender=='M') ? `o` : `@` } ${ name }`;
    }
    
}