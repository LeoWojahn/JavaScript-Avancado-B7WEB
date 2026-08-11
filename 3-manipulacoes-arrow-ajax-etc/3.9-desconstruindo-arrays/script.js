// No exemplo a baixo desconstruimos o array mais tarde.

let array = ["Leonardo Wojahn", "Leonardo", "Wojahn", "@leowojahn"];

let [nomeCompleto, , , instagram] = array;

console.log(nomeCompleto);

// No exemplo abaixo estamos criando o array e automaticamenta já desconstruindo ele.

let [, nome, sobrenome] = [
	"Leonardo Wojahn",
	"Leonardo",
	"Wojahn",
	"@leowojahn",
];

console.log(nome);
