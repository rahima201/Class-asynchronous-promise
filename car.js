//1.
// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.speed = 10;
//   }

//   getAcceleration(amount) {
//     this.speed += amount;
//     console.log(`${this.brand} is now traveling at ${this.speed} mph`);
//   }

//   doBrake(amount) {
//     if (this.speed - amount >= 0) {
//       this.speed -= amount;
//     } else {
//       this.speed = 0;
//     }
//     console.log(
//       `${this.brand} ${this.model} has slowed down to ${this.speed} mph`
//     );
//   }
// }

// // creating instances
// const car1 = new Car("Toyota", "Camry", 2015);

// car1.getAcceleration(30);
// car1.doBrake(20);

//

///

////2. Define a class named 'Car'
class Car {
  // This constructor runs when we create a new Car object
  constructor(brand, model, year) {
    this.brand = brand; // Car brand (like Toyota, Honda)
    this.model = model; // Car model (like Corolla, Civic)
    this.year = year; // Car year (like 2024)
  }

  // A method that shows details about the car
  showDetails() {
    console.log(`This car is a ${this.year} ${this.brand} ${this.model}.`);
  }
}

// Create a new Car object
const myCar = new Car("Toyota", "Corolla", 2024);

// Call the showDetails method to print car info
myCar.showDetails(); // Output: This car is a 2024 Toyota Corolla

// Print the full car object
console.log(myCar); // Output: Car { brand: 'Toyota', model: 'Corolla', year: 2024 }
