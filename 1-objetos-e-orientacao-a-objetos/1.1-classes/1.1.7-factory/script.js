class Person {
	age = 0;

	constructor(name) {
		this.name = name;
	}
}

function createPerson(name, age) {
	let p = new Person(name);
	p.age = age;
	return p;
}

console.log(createPerson('Leo', 21));