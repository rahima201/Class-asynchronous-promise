//1

//1.that is the way to create class an object

//creating class
class person {
  constructor(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
  }

  sayHello() {
    console.log(
      `Hello my name is ${this.firstName} is waiving you Mr ${this.secondName}`
    );
  }
}

//to work with class we have to create instance
// const person1 = new person("Rahima", "Ruhit");

// person1.sayHello();

//

//

//2.second example for class
// Make a Car class
class Car {
  // Set brand and year when a new car is made
  constructor(brand, year) {
    this.brand = brand; // Save the brand
    this.year = year; // Save the year
  }

  // This runs when car starts
  startEngine() {
    // Show message when engine starts
    console.log(
      `${this.brand}, engine starts and it's from ${this.year} model`
    );
  }

  // This runs when car stops
  stopEngine() {
    // Show message when engine stops
    console.log(`${this.brand}, engine stops`);
  }
}

// Make a car named myCar with brand BMW and year 2011
const myCar = new Car("BMW", 2011);

// Make another car named shohaibCar with brand Toyota and year 2025
const shohaibCar = new Car("Toyota", 2025);

// Start engine for myCar
myCar.startEngine();

// Start engine for shohaibCar
shohaibCar.startEngine();

// Stop engine for shohaibCar
shohaibCar.stopEngine();

//

//

//3. class
// Create a class named 'Person'
class Person {
  // The constructor runs when a new object is created from this class
  constructor(name, age) {
    this.name = name; // Set the 'name' property of the object
    this.age = age; // Set the 'age' property of the object
  }

  // A method named 'greet' that prints a message using name and age
  greet() {
    console.log(`hello my name is ${this.name} and my age is ${this.age}`);
  }
}

// Create a new object from the Person class
// Give it the name "Rahima" and age 24
const person2 = new Person("Rahima", 24);

// Call the greet() method of the person2 object
person2.greet(); // Output: hello my name is Rahima and my age is 24

// Print the full object to see its properties
console.log(person2); // Output: Person { name: 'Rahima', age: 24 }
