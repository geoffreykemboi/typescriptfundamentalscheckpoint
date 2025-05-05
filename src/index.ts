// Define an interface named 'Vehicle' to assign required structure for vehicle-like objects
interface Vehicle {
    make: string;           // The manufacturer of the vehicle (e.g., Mercedes,Toyota)
    model: string;          // The model of the vehicle (e.g., Corolla, E350)
    year: number;           // Vehicle year of Manufacture
    start(): void;          // A method to start the vehicle
  }
  
  // Define a class 'Car' that implements the 'Vehicle' interface
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    // Constructor to initialize the car's make, model, and year
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implementation of the 'start' method defined in the Vehicle interface
    start(): void {
      console.log("Car engine started");  // Log a message when the car is started
    }
  }
  
  // Create an instance of the 'Car' class with specific make, model, and year
  const myCar = new Car("Mercedes Benz", "E350", 2023);
  
  // Call the 'start' method on the car instance
  myCar.start(); // Should log: "Car engine started"
  
  // Output: Car engine started  