"use strict";
// Define a class 'Car' that implements the 'Vehicle' interface
class Car {
    // Constructor to initialize the car's make, model, and year
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implementation of the 'start' method defined in the Vehicle interface
    start() {
        console.log("Car engine started"); // Log a message when the car is started
    }
}
// Create an instance of the 'Car' class with specific make, model, and year
const myCar = new Car("Mercedes Benz", "E350", 2023);
// Call the 'start' method on the car instance
myCar.start(); // Should log: "Car engine started"
// Output: Car engine started  
