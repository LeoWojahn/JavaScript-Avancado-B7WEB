let person = {
	name: "Leonardo",
	lastName: "Wojahn",
	age: 90,
	getFullName() {
		return `${this.name} ${this.lastName}`;
	},
    start() {
        console.log('Deu start na pessoa.');
    }
};

person.start();
console.log(person.getFullName());
