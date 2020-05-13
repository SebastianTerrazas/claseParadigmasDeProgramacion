// fetch api
const url = "https://jsonplaceholder.typicode.com/posts"
const list2 = fetch(url)
	.then(response => response.json())
	.then(posts => {
		const list = posts.map(post =>
			`<li> <a href="detalle.html?id=${post.id}">${post.id}</a> ${post.title} </li>`).join('')
		const listHTML = document.getElementById('list');
		listHTML.innerHTML = list;
	})


