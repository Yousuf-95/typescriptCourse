# TypeScript Classes and Interfaces

The only job of an interface in TypeScript is to describe a type. While class and function deal with implementation, interface helps us keep our programs error-free by providing information about the shape of the data we work with.

Uses of TypeScript

1. Describing an Object
```TS
interface Person {
    name: string;
    age: number;
    designation?: string;
}
```

2. Describing an Indexable Object
```TS
interface WidgetMap {
    [name: string]: Widget;
}

var map: WidgetMap = {};
map['gear'] = new GearWidget();
var w = map['gear']; // w is inferred to type Widget
```