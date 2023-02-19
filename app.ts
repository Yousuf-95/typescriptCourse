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

const enumTest = {
    properties: Designation["Backend Developer"]
}

// Explicit declaration of Array type
let favoriteActivities: string[];
favoriteActivities = ["Sports", "Cooking"];


console.log(person.name);