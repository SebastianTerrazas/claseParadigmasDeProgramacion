console.log("fdghgjklñ")
var getIt;
const doThing = () => {
	console.log("poi")
	cleanRoom()
	.then(res => {
		return res
	}).then(res => {
		return res
	}).then(res => {
		document.getElementById('sad').textContent = document.getElementById('sad').textContent.replace(':)', res)
		document.getElementById('task3').textContent = document.getElementById('task3').textContent.replace('?', res)
		getIt = setInterval(function() {
			task3.textContent = task3.textContent + ' pls'
		}, 1000)
		document.getElementById('killme').style.display = 'block'
	})
}

const nice = () => {
	clearTimeout(getIt)
	document.getElementById('sad').textContent = document.getElementById('sad').textContent.replace(':(', ':)')
}

const cleanRoom = () => {
	console.log("alknsd")
	return new Promise((resolve,reject) => {
		let task1 = document.getElementById('task1')
		task1.style.display = 'block'
		setTimeout(function(){ 
			task1.textContent = task1.textContent.replace('?','')
			task1.style.color = 'green'
			task1.style.fontSize = '1.3em'
		}, 1000)
		setTimeout(function(){ 
			resolve( doHomework() )
		}, 1500)
	})
}

const doHomework = () => {
	return new Promise((resolve,reject) => {
		let task2 = document.getElementById('task2')
		task2.style.display = 'block'
		setTimeout(function(){ 
			task2.textContent = task2.textContent.replace('?','')
			task2.style.color = 'green'
			task2.style.fontSize = '1.3em'
		}, 1300)
		setTimeout(function(){ 
			resolve( goClubbing() )
		}, 1800)
	})
}

const goClubbing = () => {
	return new Promise((resolve,reject) => {
		let task3 = document.getElementById('task3')
		task3.style.display = 'block'
		setTimeout(function(){ 
			task3.textContent = "Don't " + task3.textContent
			task3.style.color = 'red'
			task3.style.fontSize = '1.3em'
		}, 1500)
		setTimeout(function(){ 
			resolve( ':(' )
		}, 1900)
	})
}