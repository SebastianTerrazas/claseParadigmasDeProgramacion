// obtener el parámetro
const urlLocal = new URL(window.location.href);
const search_params = urlLocal.searchParams;
const id = search_params.get('id');
console.log(id)

const mainURL1 = "https://gateway.marvel.com/v1/public/characters";
const ts = "1";
const apikey = "226227a2447ee9790b5a7356e9cdcb03";
const hash = "26a4df7389d43a8c1fe31d79ace92ae9";

// consume API
const url = `${mainURL1}/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
const detalle = fetch(url)
	.then(response => response.json())
	.then(character => {
		const copyR = document.getElementById("copyrightstuff");
		copyR.innerHTML = character.attributionHTML;
		const characterT = character.data.results[0];
		//console.log(characters);
		const spaceCharTemp = 
			`<div class="row align-items-top charsTab individualCharListDet">
				<div class="col-3">
					<img src="${characterT.thumbnail.path}.${characterT.thumbnail.extension}" width="400" height="400" />
				</div>
				<div class="col charsShow">
					<div class="row">
						<h2 class="display-1">${characterT.name}</h2>
					</div>
					<div class="row">
						<em class="display-4 display-mine">${characterT.description || 'No description avaliable'}</em>
					</div>
				</div>
			</div>
			`;
		const listHTML = document.getElementById('spaceChar');
		listHTML.innerHTML = spaceCharTemp;

		const comiclist = character.data.results[0].comics.items.map(comic =>
			`<li class="list-group-item list-group-item-custom-mine"> ${comic.name} </li>`
		).join('')
		const comicsHTML = document.getElementById('comiclistid');
		comicsHTML.innerHTML = comiclist;

	})