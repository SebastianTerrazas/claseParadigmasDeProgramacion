const urlLocal = new URL(window.location.href);
const search_params = urlLocal.searchParams;
const page = search_params.get('page') || 1;
console.log("test");

const mainURL1 = "https://gateway.marvel.com/v1/public/characters";
const ts = "1";
const apikey = "226227a2447ee9790b5a7356e9cdcb03";
const hash = "26a4df7389d43a8c1fe31d79ace92ae9";

const url = `${mainURL1}?ts=${ts}&apikey=${apikey}&hash=${hash}`;
//const url = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=226227a2447ee9790b5a7356e9cdcb03&hash=26a4df7389d43a8c1fe31d79ace92ae9"
const list2 = fetch(url)
	.then(response => response.json())
	.then(characters => {
		const copyR = document.getElementById("copyrightstuff");
		copyR.innerHTML = characters.attributionHTML;
		const charactersList = characters.data.results;
		console.log(characters);
		const list = characters.data.results.map(character => 
			// console.log(character);
			//`<a class="container-fluid individualCharListLink" href=`https://gateway.marvel.com/v1/public/characters/${character.id}?ts=1&apikey=226227a2447ee9790b5a7356e9cdcb03&hash=26a4df7389d43a8c1fe31d79ace92ae9`>
			`<a class="container-fluid individualCharListLink" href="detalle.html?id=${character.id}">
				<div class="row align-items-center charsTab individualCharList">
					<div class="col-1">
						<img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="65" height="65" />
					</div>
					<div class="col charsShow">
						<div class="row">
							<h5>${character.name}</h5>
						</div>
						<div class="row">
							<em>${character.description || '---'}</em>
						</div>
					</div>
				</div>
			`
		).join('')
		const listHTML = document.getElementById('list');
		listHTML.innerHTML = list;
	})


