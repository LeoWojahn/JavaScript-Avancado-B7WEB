class Person {
	_age = 0;
	steps = 0;

	constructor(name, age) {
		this.name = name;
	}

	takeAStep() {
		this.steps++;
	}

	get age() {
		return this._age;
	}

	set age(age) {
		this._age = age;
	}
}

let pessoa1 = new Person("João");
let pessoa2 = new Person("Maria");
let pessoa3 = new Person("Pedro");

pessoa1.takeAStep();
pessoa1.takeAStep();
pessoa1.takeAStep();
pessoa1.takeAStep();

console.log(`Passos de ${pessoa1.name}: ${pessoa1.steps}`);
