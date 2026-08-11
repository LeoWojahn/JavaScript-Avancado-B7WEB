let pessoa = {
	nome: "Leonardo",
	sobrenome: "Wojahn",
	idade: 25,
	social: {
		facebook: "Leonardo Wojahn",
		instagram: "leowojahn",
	},
	nomeCompleto: function () {
		return `${this.nome} ${this.sobrenome}`;
	},
};

/*
Desconstruindo e trocando o nome da variável

let { nome:pessoaNome, sobrenome:pessoaSobrenome, idade:pessoaIdade } = pessoa;

let { nome, sobrenome, idade = 0 } = pessoa;
console.log(nome, sobrenome, idade);

*/

// let { facebook, instagram } = pessoa.social;

let {
	nome,
	idade,
	social: { instagram },
} = pessoa;

console.log(nome, idade, instagram);
