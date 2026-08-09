let nome = "   Leonardo Zitzke Wojahn   ";

// Diz a quantidade de caracteres incluindo espaços
console.log(nome.length);

// diz a posição que começa
console.log(nome.indexOf("Zitzke"));
// retorna -1 caso n ache
console.log(nome.indexOf("Aleluia"));

if (nome.indexOf("Wojahn") > -1) {
	console.log("Achou!");
} else {
	console.log("Não achou!");
}

// Pega os caracteres da posição 0 a 10
console.log(nome.slice(0, 10));

// Troca valores da string
console.log(nome.replace("Zitzke", "Silva"));

// Caixa alta e baixa
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

// Concatenação
console.log(nome.concat(" ", "Silva"));

// Tira os espaços:
console.log(nome.trim());

// Qual caractere está naposição 7
console.log(nome.charAt("7"));

// divide o nome por espaços e gere um array com as palavras separadas
console.log(nome.split(" "));
