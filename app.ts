// Wrong way to declare an object. TS will only know it is an object and will throw an error at each object property
// const person: object = {
//     name: "Yousuf",
//     age: 15
// }

// Explicit object definition. Not necessarily required.
// const person: {
//     name: string;
//     age: number
// } = {
//     name: "Yousuf",
//     age: 15
// }

// TS identifies object type by inference.
const person: {
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string];
} = {
    name: "Yousuf",
    age: 15,
    hobbies: ["Sports", "Cooking"],
    roles: [2,'author']
}

// "enum" type declaration
enum Designation {"Manager", "Full Stack Developer", "Backend Developer"};

// "any" type declaration
let anyType: any;
anyType = 3;
anyType = 'Assign "number" ,"string", "boolean" or any other type of value'; 

const enumTest = {
    properties: Designation["Backend Developer"]
}

// "union" type declaration
function combine(input1:number | string, input2:number | string) {
    let result: number | string; 
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
        return result;
    }
    else {
        result = input1.toString() + input2.toString();
    }
}

// "literal" type declaration
//  Literals are exact values that are JavaScript primitives.
// * Examples:
let literalType: 'manager' | 'director'; // this variable can have either of the two string values mentioned
let literalType2: 25 | 30; // this variable can have either of the two numbers mentioned.


// Explicit declaration of Array type
let favoriteActivities: string[];
favoriteActivities = ["Sports", "Cooking"];


console.log(person.name);