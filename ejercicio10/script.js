var list = [];

const addWord = word => {
	list.push(word);
	console.log(list.length);
	console.log(list[list.length-1]);
	var li = document.createElement("LI");
	var tn = document.createTextNode(word);
	li.appendChild(tn);
	document.getElementById('listH').appendChild(li);
}