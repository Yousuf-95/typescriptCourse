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
var person = {
    name: "Yousuf",
    age: 15,
    hobbies: ["Sports", "Cooking"],
    roles: [2, 'author']
};
var Designation;
(function (Designation) {
    Designation[Designation["Manager"] = 0] = "Manager";
    Designation[Designation["Full Stack Developer"] = 1] = "Full Stack Developer";
    Designation[Designation["Backend Developer"] = 2] = "Backend Developer";
})(Designation || (Designation = {}));
;
var enumTest = {
    properties: Designation["Backend Developer"]
};
// Explicit declaration of Array type
var favoriteActivities;
favoriteActivities = ["Sports", "Cooking"];
console.log(person.name);
