// PSEUDO-CLASS
// function Person (name, wheels, city) {
//     this.name = name
//     this.age = age
//     this.city = city;
//     }
//     Person.prototype.sayHello = function() {
//         alert ('Hello my name is ' + this.name + 
//                           '! I am ' + this.age +  
//          ' years old and I live in '+ this.city);
//     }
//     let p1 = new  Person ('Jane',29,'Birmingham');
//     p1.sayHello();


//  CONSTRUCTOR  
// function Person (name,age) {
//     this.name = name;
//     this.age = age;
// }
//  Person ('tameka', '34')


//ES6 
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         alert(`Hello my name is 
//     ${this.name}! I am  ${this.age} years old.`);
//     }
// }
// let p1 = new Person('June', 29);
// p1.sayHello();

class Vehicle {
    constructor(type, manu, wheels) {
        this.type = type;
        this.manu = manu;
        this.wheels = wheels;
    }

    About() {
        console.log(`This is a ${this.type}. made by ${this.manu} with ${this.wheels} wheels`);
    }

}
class Truck extends Vehicle {
    constructor(type, manu, wheels, doors) {
        super(type, manu, wheels, doors);
        this.doors = doors;
    }

    About() {
        console.log(`This is a ${this.type}. made by ${this.manu} with ${this.wheels} wheels and ${this.doors} doors`);
    }
}
class Sedan extends Vehicle {
    constructor(type, manu, wheels,doors, mpg) {
        super(type, manu, wheels,doors);
        this.mpg = mpg;
        this.doors = doors;
    }

    About() {
        console.log(`This is a ${this.type}. made by ${this.manu} with ${this.wheels} wheels and ${this.doors} doors that goes ${this.mpg}`);
    }
}

let t1 = new Truck('car', 'honda', '4', '4');
let s1 = new Sedan('compact', 'mini', '4','4', '2');


console.log(t1);
console.log(s1);

t1.About();
s1.About();
