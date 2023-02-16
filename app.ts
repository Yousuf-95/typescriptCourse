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
const person = {
    name: "Yousuf",
    age: 15
}

console.log(person.name);