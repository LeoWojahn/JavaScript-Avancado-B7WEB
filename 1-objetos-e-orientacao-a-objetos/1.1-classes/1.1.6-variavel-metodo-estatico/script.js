class Person {
	static hands = 2;
	age = 0;

	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log(`Olá, eu sou ${this.name} e tenho ${this.hands} mãos.`);
	}
}

let p1 = new Person("Leonardo");
p1.sayHi();
