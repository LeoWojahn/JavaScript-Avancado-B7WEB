// Promise = Promessa

function clicou() {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			alert(`Título do primeiro post: ${json[0].title}`);
		})
		.catch((error) => {
			alert("Deu problema na requisição!");
		})
		.finally(() => {
			alert("Acabou");
		});
}

document.querySelector("#botao").addEventListener("click", () => {
	clicou();
});
