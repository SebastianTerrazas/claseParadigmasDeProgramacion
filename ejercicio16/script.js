// -Crear un programa que reciba por medio de una función un en entero
// -Por medio de promesas resolver si es mayor a 18 años con el mensaje "Mayor de edad"
// -Si es menor de 18 años rechazar con el mensaje "Menor de edad"
// -Utilizar promesas
// -Utilizar funciones de flechita
// -Compartir link del repositorio github

const revisarEdad = (X) => {
	return new Promise((resolve,reject) => {
		if (X < 18) {
			reject("Menor de edad")
		} else {
			resolve("Mayor de edad")
		}
	})
}

const isLegal = guess => {
	revisarEdad(guess)
		.then(msg => console.log(msg))
		.catch(msg => console.log(msg))
}
