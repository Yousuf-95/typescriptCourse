# TypeScript types

Typescript types are categorized into: 
+ Primitive types
+ Object types

## Primitive types

 Name | Description
-----|-------
string| Represents text data
number| Represents numeric value
boolean| Either true or false
null | Represents one value: null
undefined | Default value of uninitialized variable
symbol | Represents a unique constant value

### Number type
All numbers in TypeScript are either floating-point values of bigint integers. The floating point numbers have the type <code>number</code> while the bigint type have the type <code>bigint</code>. Bigint integers represent whole numbers greater than 2<sup>54</sup> - 1.Big int numbers end with an <code>n</code> character at the end if the number.

```TS
let numberType: number = 42;
let bigintType: bigint = 9007199254740993n;
```

### String type
Typescript uses doube quotes <code>("")</code>, single quotes <code>('')</code> and back ticks <code>(``)</code> to surround string literals.

```TS
let stringType1: string = "String literal in doble quotes.";
let stringType2: string = 'String literal in single quotes.';
let stringType3: string = `String literal in back ticks. This can be a multi-line string unlike the other two.`
```
### Boolean type
The <code>boolean</code> type allows two values: <code>true</code> <code>false</code>.

```TS
let pending: boolean = true;
let completed: boolean = false;
```

## Object type
The TypeScript <code>object</code> type represents all values that are not primitive type.

```TS
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23,
    jobTitle: 'Backend Engineer'
}
```

### Array type
A TypeScript <code>array</code> is an ordered list of data. To declare an array that holds values of a specific type, you use the following syntax:
```TS
let orders: string[]
let numberOrString: (number | string)[];
```

### Tuple type
A <code>tuple</code> works like an array with some additional considerations:
- The number of elements in the tuple is fixed.
- The types of elements are known, and need not be the same.

For example, you can use a tuple to represent a value as a pair of a string and a number:
```TS
let skill: [string, number] = ["Programming", 7];
```

A tuple can have optional element specified using question mark (?) postfix.
```TS
let marks: [number, number, number, number?];
marks = [60,70,85,45];
marks = [80,45,33];
```

### Enum type
An <code>enum</code> is a way to organize a collection of related values.
For example, we can store employee designations:
```TS
enum designations {
    Backend Developer,
    Frontend Developer,
    Integration Engineer
}

console.log(designations["Backend Developer"]);     // Backend Developer
console.log(designations[0]);   // Backend Developer
```

enum values can be accessed just like properties are accessed in JavaScript object and it can also be accessed
with numbers as shown in above example. By default, number/index starts from 0 and can be changed as required.</br>
For example:
```TS
enum designations {
    Backend Developer = 1,
    Frontend Developer = 4,
    Integration Engineer = 6
}

console.log(designations[1]);   // Backend Developer
```

### Any type
The <code>any</code> type allows to store any type of value in a variable. This basically means TypeScript's type checking feature will not work on that variable and will work just like in JavasScript.
```TS
let anyValue: any;
anyValue = 123;
console.log(anyType);   // 123
anyValue = {name: "John Doe"};
console.log(anyValue.lastname);     // undefined
```

In the above example, when accessing object properties, TypeScript will not issue any warning and will output <code>undefined</code> for any object property that doesnot exist.

### Never type
The <code>never</code> type is a type that contains no value, i.e, no value can be assigned to a variable of type <code>never</code>.
Typically, <code>never</code> type is used to represent return type of a function that always throws an error or a function that contains an infinite loop. Only <code>never</code> type variable can be assigned to another <code>never</code> type variable. 
```TS
function throwError(message: string): never {
    throw new Error(message)
}

function infiniteLoop(): never {
    while(true) {
        console.log("Infinite loop");
    }
}
```

### Union type
A <code>union</code> type is a type formed from two or more other types, representing values that may be any one of those types. Each of these types is called union's members.
```TS
let numberOrString: number | string;
```