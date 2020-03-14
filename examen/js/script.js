const switch01 = (table, start, end) => {
	if(check01(table)){ 
		document.getElementById(table).src = "img/tableOff.png"
		document.getElementById(end).innerHTML = getHora();
		endPrice(table);
	} else {
		document.getElementById(table).src = "img/tableOn.png";
		document.getElementById(start).innerHTML = getHora();
		document.getElementById(end).innerHTML = '-';
		startPrice(table);
	}
}

const check01 = table => {
	return document.getElementById(table).src.match("tableOn");
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

var price1, price2, price3,
	price4, price5, price6; 
const startPrice = table => {
	switch (table) {
		case 'm1i':
			document.getElementById('m1p').innerHTML = 0;
			price1 = setInterval(startPrice1, 720);
			break;
		case 'm2i':
			document.getElementById('m2p').innerHTML = 0;
			price2 = setInterval(startPrice2, 720);
			break;
		case 'm3i':
			document.getElementById('m3p').innerHTML = 0;
			price3 = setInterval(startPrice3, 720);
			break;
		case 'm4i':
			document.getElementById('m4p').innerHTML = 0;
			price4 = setInterval(startPrice4, 720);
			break;
		case 'm5i':
			document.getElementById('m5p').innerHTML = 0;
			price5 = setInterval(startPrice5, 720);
			break;
		case 'm6i':
			document.getElementById('m6p').innerHTML = 0;
			price6 = setInterval(startPrice6, 720);
			break;
	}
}
function startPrice1() {
	var number = Math.round((parseFloat(document.getElementById('m1p').textContent) + .01) * 100)/100;
	document.getElementById('m1p').innerHTML = number.toFixed(2);
}
function startPrice2() {
	var number = Math.round((parseFloat(document.getElementById('m2p').textContent) + .01) * 100)/100;
	document.getElementById('m2p').innerHTML = number.toFixed(2);
}
function startPrice3() {
	var number = Math.round((parseFloat(document.getElementById('m3p').textContent) + .01) * 100)/100;
	document.getElementById('m3p').innerHTML = number.toFixed(2);
}
function startPrice4() {
	var number = Math.round((parseFloat(document.getElementById('m4p').textContent) + .01) * 100)/100;
	document.getElementById('m4p').innerHTML = number.toFixed(2);
}
function startPrice5() {
	var number = Math.round((parseFloat(document.getElementById('m5p').textContent) + .01) * 100)/100;
	document.getElementById('m5p').innerHTML = number.toFixed(2);
}
function startPrice6() {
	var number = Math.round((parseFloat(document.getElementById('m6p').textContent) + .01) * 100)/100;
	document.getElementById('m6p').innerHTML = number.toFixed(2);
}
const endPrice = table => {
	switch (table) {
		case 'm1i':
			clearTimeout(price1);
			break;
		case 'm2i':
			clearTimeout(price2);
			break;
		case 'm3i':
			clearTimeout(price3);
			break;
		case 'm4i':
			clearTimeout(price4);
			break;
		case 'm5i':
			clearTimeout(price5);
			break;
		case 'm6i':
			clearTimeout(price6);
			break;
	}
}