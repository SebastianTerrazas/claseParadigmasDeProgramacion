const switch01 = (num) => {
	if(check01(num)){ 
		document.getElementById(`m${num}i`).src = "img/tableOff.png"
		document.getElementById(`m${num}t2`).innerHTML = getHora();
		endPrice(`m${num}i`);
	} else {
		document.getElementById(`m${num}i`).src = "img/tableOn.png";
		document.getElementById(`m${num}t1`).innerHTML = getHora();
		document.getElementById(`m${num}t2`).innerHTML = '-';
		startPrice(num);
	}
}

const check01 = num => {
	return document.getElementById(`m${num}i`).src.match("tableOn");
}

const getHora = () => {
	var now = new Date(),
        time = now.getHours() + ':' + ("0" + now.getMinutes()).slice(-2) + ':' + ("0" + now.getSeconds()).slice(-2);

    return time;
}
function updateClock() {
    var time = 'Hora: ' + getHora();
    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = time;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call

var price = [];
const startPrice = num => {
	document.getElementById(`m${num}p`).innerHTML = 0;
	price[num-1] = setInterval(function(){ startPriceCount(num); }, 720);
}
function startPriceCount(num) {
	var number = Math.round((parseFloat(document.getElementById(`m${num}p`).textContent) + .01) * 100)/100;
	document.getElementById(`m${num}p`).innerHTML = number.toFixed(2);
}
const endPrice = num => {
	clearTimeout(price[num-1]);
}