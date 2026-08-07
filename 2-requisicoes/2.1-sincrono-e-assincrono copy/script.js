// O que é Síncrono e Assíncrono?

/*
Síncrono:

Ele executa linha por linha.
*/

let nome = "Leonardo";
let sobrenome = "Wojahn";
let nomeCompleto = nome + sobrenome;

/* 
Assíncrono, executa tudo de vez. Nesse caso, há um problema em relação código. Executando tudo de uma vez, teremos problema na linha 3, pois para definir nomeCOmpleto, precisamos ter definido nome e sobrenome, mas como foi executado tudo de uma vez, nome e sobrenome n foram definidos.
*/
