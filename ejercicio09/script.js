const invertir = field => {
	document.getElementById(field).textContent = document.getElementById(field).textContent.split('').reverse().join('');
	document.getElementById(field).value = document.getElementById(field).value.split('').reverse().join('');

}