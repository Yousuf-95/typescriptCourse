## Generics

Generics in TypeScript are a method for creating reusable components or functions that can handle multiple types. They serve the purpose of writing reusable, type-safe code where the type of variable is known at compile time.

Below is a function that returns the first element of an array
```TS
function head(arr: number[]): number | undefined {
  return arr[0];
}
```

If we would like to make the above function work for both <code>string</code> and <code>number</code> arrays, we can use union type.
```TS
function head(arr: number[] | string[]): number | string | undefined {
  return arr[0];
}
```
In the example above, we know that using a <code>number</code> array will get us a <code>number</code> and not <code>string</code>.
<br>
This can be solved with generics for value of any type.
```TS
function head<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

### Constraints in Generics
In the example below, we would like to merge two <code>objects</code> and therefore we have to make sure that both the generic types <code>T</code> and <code>U</code> should be of type <code>object</code>.
```TS
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
```
In the example above, we extend both the generic type to be of type <code>object</code>. We can extend it to be of any of the types available in TypeScript.