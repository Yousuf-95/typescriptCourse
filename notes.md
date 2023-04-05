# Advanced Types

## 1. Intersection type
An intersection type combines two or more types to create a new type that has all properties of the existing types.
```TS
let typeA: string | number;
let typeB: number | boolean;
let typeAB = typeA & typeB; // typeAB will be of type 'number'

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
    mobile: string;
}

type Employee = Identity & Contact; // contains all fields from Identity and Contact

let employee = {
    id: 201,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "1234567890"
    mobile: "0987654321" // Mobile field will be added in intersection type
}
```

## 2. Type guards
Type guards in objects: 
```TS
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
//   if(typeof emp === 'Employee') // This won't work. Works only with types present in JavaScript
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}
```
Type guard in classes:
```TS
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
//   if ('loadCArgo' in Vehicle) // This would also work in this case but the method discussed below is preferred.
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
```

## 3. Discriminated Unions
Discriminated unions are basically a union type with a tag. To convert a union type into a discriminated union type, we use a common property across our types. This property can be any name and will serve as an ID for the different types. Every type will have a different literal type for that property.
```TS
interface Bird {
    type: 'bird',
    flyingSpeed: number
}

interface Horse {
    type: 'horse',
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird': {
            speed = animal.flyingSpeed;
            break;
        }
        case 'horse': {
            speed = animal.runningSpeed;
            break;
        }
    }

    console.log('Moving at speed: ' + speed);
}
```

## 4. Function overloading
In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do this, write some number of function signatures (usually two or more), followed by the body of the function.
```TS
type Combinable = string | number;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
```