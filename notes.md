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