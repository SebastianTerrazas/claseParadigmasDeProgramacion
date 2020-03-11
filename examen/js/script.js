const switch01 = (table, start, end, price) => {
	console.log("switch");
	if(check01(table)){ 
		document.getElementById(table).src = "img/tableOff.png"
		document.getElementById(end).innerHTML = getHora();
	} else {
		document.getElementById(table).src = "img/tableOn.png";
		document.getElementById(start).innerHTML = getHora();
		document.getElementById(end).innerHTML = '-';

	}
}

const check01 = table => {
	console.log("check");
	return document.getElementById(table).src.match("tableOn");
}


const getHora = () => {
	var now = new Date(),
        time = now.getHours() + ':' + ("0" + now.getMinutes()).slice(-2) + ':' + ("0" + now.getSeconds()).slice(-2);
        return time;
}
// Hora
function updateClock() {
    var now = new Date(), // current date
        time = 'Hora: ' + now.getHours() + ':' + ("0" + now.getMinutes()).slice(-2) + ':' + ("0" + now.getSeconds()).slice(-2);
    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = time;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call