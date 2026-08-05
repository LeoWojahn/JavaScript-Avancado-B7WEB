class Person {
	age = 0;

	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log(`${this.name} diz oi!`);
	}
}

class Student extends Person {
	constructor(name, n_matricula) {
		super(name);
		this.n_matricula = n_matricula;
	}

	realizarFormatura() {
		console.log(`${this.name} está se formando.`);
	}
}

let p1 = new Person("Leonardo");
let p2 = new Student("Luiza", "549675");

console.log(`${p1.name} tem um nome - ${p1.name} - pois é uma pessoa.`);
console.log(
	`${p2.name} além de ser uma passoa e ter um nome - ${p2.name} - tem também um número de matrícula, pois é estudante: ${p2.n_matricula}.`,
);

p1.sayHi();
p2.sayHi();

p2.realizarFormatura();

/*
Característica única do estudante
Da erro.
p1.realizarFormatura();
*/
