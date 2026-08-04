class Person {

    age = 0;

    constructor(name, age) {
        this.name = name;
    }
}

let pessoa1 = new Person("João");
let pessoa2 = new Person("Maria");
let pessoa3 = new Person("Pedro");

pessoa1.age = 20;

console.log(`P1 = ${pessoa1.name} tem ${pessoa1.age} anos`);
console.log(`P2 = ${pessoa2.name} tem ${pessoa2.age} anos`);
console.log(`P3 = ${pessoa3.name} tem ${pessoa3.age} anos`);
