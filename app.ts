//  * Generics

// * Generic function with constraint
// Example 1 (Restricting type of parameter)
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

// Example 2 (Defining length property on parameter).
// Without extending Lengthy interface, TypeScript will give an error as length property
// may not be present in the passed argument.
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}


// "Keyof" constraint
// Function below shows error because it doesnot know if 'key' property exists in passed object. This can be solved
// with 'keyof' constraint.
function extractAndConvert(obj: object, key: string) {
    return 'Value: ' + obj[key];
}

function extractAndConvert2<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

// * Generic Utility types
interface Employee {
    name: string;
    age: number;
    email: string;
}

let employee1: Employee = {}; // this line will have an error because at this time, variable is not of defined type.
employee1.name = 'John Doe';
employee1.age = 22;
employee1.email = 'john@email.com';

// Solution
let employee2: Partial<Employee> = {};
employee2.name = 'John Doe';
employee2.age = 22;
employee2.email = 'john@email.com';