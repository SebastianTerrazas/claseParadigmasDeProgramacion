// Realizar un programa que cumpla con los siguientes pasos.
// 1. Obtener clima
// 2. Obtener Trafico

// -Cada proceso se debe de ejecutar de manera secuencial.
// -Utilizar async await
// -Mostrar mensaje del proceso que se esta ejecutando
// -Utilizar setTimeout para simular el tiempo que se tarda para realizar la tarea.
// -Utilizar funciones de flechita
// -Compartir link del repositorio github

const obtenerClima = () => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve("Clima soleado: 30°C")
		}, 5000)
	})
}

const obtenerTrafico = () => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve("Sin trafico")
		}, 5000)
	})
}

const planViaje = async () => {
	try {
		const clima = obtenerClima()
		const trafico = obtenerTrafico()
		const plan = await Promise.all([clima,trafico])
		return plan
	} catch (error) {
		throw error
	}
}

planViaje()
	.then(infoPlan => {
		console.log(infoPlan)
	})
	.catch(error => {
		console.error(error)
	})