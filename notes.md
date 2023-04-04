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