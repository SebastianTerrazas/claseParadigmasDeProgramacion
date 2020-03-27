var arr = [];

const addArr = (numIn, og) => {
	arr.push(numIn.value);
	og.textContent += (arr.length > 1) ? ', ': '';
	og.textContent += numIn.value;
	numIn.value = '';
}

const startDo = (ma, fi, re) => {
	// do map thing
	const arrMap = arr.map(x => x * x);
	for (var i = 0; i <= arrMap.length - 1; i++) {
		ma.textContent += (i > 0) ? ', ': '';
		ma.textContent += arrMap[i];
	}
	// do filter thing
	const arrFilter = arr.filter(x => x > 3);
	for (var i = 0; i <= arrFilter.length - 1; i++) {
		fi.textContent += (i > 0) ? ', ': '';
		fi.textContent += arrFilter[i];
	}
	// do reduce thing
	const reducer = (accomulator, currentValue) => parseFloat(accomulator) + parseFloat(currentValue);
	re.textContent += arr.reduce(reducer);
}

const reset = () => {
	document.getElementById('og').textContent = 'Array = ';
	document.getElementById('map').textContent = 'Map Array = ';
	document.getElementById('filter').textContent = 'Filter Array = ';
	document.getElementById('reduce').textContent = 'Reduce Array = ';
	arr = [];
}