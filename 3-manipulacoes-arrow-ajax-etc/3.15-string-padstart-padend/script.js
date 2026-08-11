let telefone = "5";

console.log(telefone.padEnd(9, "*"));
console.log(telefone.padStart(9, "*"));

let cartao = "1234123412341234";

let seuCartao = cartao.slice(-4);

console.log(`Este é o seu cartão? ${seuCartao.padStart(16, "*")}`);
