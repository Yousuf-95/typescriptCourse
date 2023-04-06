// * Intersection types
// * Intersection in union type
type typeA = string | number;
type typeB = number | boolean;
type typeAB = typeA & typeB;

let intersectionType: typeAB = 123;

// * Intersection in object type
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
    aadharNumber: number
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact; // contains all fields from Identity and Contact

let employee: Employee = {
    id: 201,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "1234567890",
    aadharNumber: 1234567890
}

// * Type Casting
// const paragraph = document.querySelector('p'); // TypeScript knows it is a <p> tag
// const paragraph = document.getElementById('error-message'); // TypeScript doesnot know if it is a <p> tag
const userInputElement = document.getElementById('user-input')!; // TypeScript doesnot know it is a <input> tag
userInputElement.value = "Hello from TypeScript"; // error
// above error can be solved with Type Casting

const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;
userInputElement1.value = "Hello from TypeScript";

const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement; // Used in React world
userInputElement2.value = "Hello from TypeScript";

const userInputElement3 = document.getElementById('user-input'); // Removing exclamation mark (null check)
if(userInputElement3) {
    (userInputElement3 as HTMLInputElement).value = "Hello from TypeScript";
}

// * Index Properties
interface ErrorContainer {
    // id: number; // Cannot be number
    id: string;
    [prop: string]: string
}

// * Function overloading
type Combinable = string | number;

function add(a: string, b: string): string; // Overload function (must be just before function implementation)
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

let result = add('Hello','World');
result.split(' '); // TypeScript knows return type is either number or string and therefore gives an error.

// Solution 1: Type casting
let result1 = add('Hello', 'World') as string;
result1.split(' ');

// Solution 2: Function overloading (see above function implementation)
let result2 = add('Hello', 'World');
result2.split(' ');

// Nullish coalesing operator use case
// In the below example, when localStorage.volume is set to 0, the page will set the volume to 0.5 which is unintended.
// nullinsh coalescing operator (??) avoids some unintended behavior from 0, NaN and "" being treated as falsy values.
function initializeAudio() {
    let volume = localStorage.volume || 0.5;
    // ...
}