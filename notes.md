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
}

type Employee = Identity & Contact; // contains all fields from Identity and Contact

let employee = {
    id: 201,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "1234567890"
}
```