let d = new Date();

// Retorna numa string
console.log(d.toString());

// No Date() podeos por até 7 parametros.

/*
Primeiro de janeiro de 2020
Date(2020, 0, 1, 12, 30, 12)
Ano, mes e dia.
Mas o mes começa do 0, por exemplo fevereiro é 1.
Dia começa do 1 mesmo.

Depois vem hora, minutos, segundo e até mesmo milesegundos.
*/

dataCompleta = new Date(2020, 2, 4, 12, 30, 15);
console.log(dataCompleta);

let dataAtual = new Date();

// Pega o ano atual em int
console.log(dataAtual.getFullYear());

// Pega o mes atual em int. Lembrando, se o mes for agosto, mes 8, vai retornar 9, pois começa no 0.
console.log(dataAtual.getMonth());

// getDay() retorna o dia da semana, começando em 0 que é domingo.
console.log(dataAtual.getDay());

// getDate() retorna o dia.
console.log(dataAtual.getDate());

// getHours() retorna a hora
console.log(dataAtual.getHours());

// getMinutes() retorna os minutos
console.log(dataAtual.getMinutes());

// getSeconds() retorna os segundos
console.log(dataAtual.getSeconds());

// getMilliseconds() retorna os milesegundos
console.log(dataAtual.getMilliseconds());
