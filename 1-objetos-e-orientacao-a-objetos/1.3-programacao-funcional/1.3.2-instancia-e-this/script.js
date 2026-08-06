let person = {
	name: "Leonardo",
	lastName: "Wojahn",
	age: 90,
	getFullName() {
		return `${this.name} ${this.lastName}`;
	},
};

console.log(person.getFullName());
