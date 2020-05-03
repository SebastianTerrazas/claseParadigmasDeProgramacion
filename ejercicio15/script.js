const orderFood = () => {
	console.log("Ordering food...")
	Promise.all([payFood, sendFood])
		.then(order => console.log(order))
		.catch(error => console.error(error))
		.finally(() => console.log("Process finalized"))
}

const payFood = new Promise((resolve,reject) => {
	console.log("Paying food...")
	setTimeout(() => {
		Promise.race([paypal,card]).then(paymentProvider => {
			resolve(resolve({done:true, paymentProvider, clientId: 45613}))
		})
	}, 3000)
})

const paypal = new Promise((resolve,reject) => {
	console.log("Trying PayPal...")
	setTimeout(() => {
		resolve("PayPal")
	}, 2000)
})

const card = new Promise((resolve,reject) => {
	console.log("Trying card...")
	setTimeout(() => {
		resolve("Card")
	}, 5000)
})

const sendFood = new Promise((resolve,reject) => {
	console.log("Sending food...")
	setTimeout(() => {
		//reject("Problem with the delivery guy")
		resolve({deliveryGuyId: 4561, distance: 10})
	}, 10000)
})

orderFood()