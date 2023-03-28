# TypeScript Classes and Interfaces

The only job of an interface in TypeScript is to describe a type. While class and function deal with implementation, interface helps us keep our programs error-free by providing information about the shape of the data we work with. Interfaces can only contain variables and methods in their definition.

### Uses of TypeScript:
</br>

1. Describing an Object
   ```TS
   interface Person {
       name: string;
       age: number;
       designation?: string;
   }
   ```

2. Describing an Indexable Object</br>
   Add an index signature to the interface, which allows the interface to have unlimited number of properties. 
   ```TS
   interface DataRecord {
       [name: string]: String;
   }

   const data: DataRecord = {
       field1: "value1",
       field2: "value2"
       ...
   };
   ```

3. Ensuring class instance shape
   Making sure a class has specific properties and methods.
   ```TS
   interface IDeveloper {
       name: string;
       position: string;
       develop(): void;
   }

   class Developer implements IDeveloper {
       name: string;
       position: string;

       constructor(name: string, position:string) {
           this.name = name;
           this.position = position;
       }

       develop(): void {
           console.log(`Develop iOS app`);
       }
   }
   ```

### Readonly property in Interface
Readonly properties cannot be changed once they are initialized. If a class implements an interface with <code>readonly</code> property, then, this restriction is enforced in class as well without having to add any extra <code>readonly</code> property in the class
```TS
interface Car {
    model: string;
    readonly make: string;
}

class Toyota implements Car {
    model: string;
    make: string;

    constructor(model: string, make: string) {
        this.model = model;
        this.make = make;
    }
}

let landCruiser = new Toyota("Land Cruiser", "Toyota");
landCruiser.make = "Honda"; // this will throw an error.
```

### Extending interfaces
An interface can extend any other interface and import its properties. This helps in building small and reusable properties. Unlike classes, an interface can extend (or inherit) multiple interfaces.
```TS
interface Engine {
    engineType: number;
    engineUniqueNumber: string;
    engineManufacturer: string
}

interface Wheel {
    wheelBase: number;
    material: string;
}

interface Car extends Engine, Wheel {
    // properties from both interfaces will be available here.
    readonly make: string;
    model: string;
}
```

### Optional properties in interfaces
Not all use cases require strict implementation of all properties or methods in an interface. In such cases, optional properties can be defined in an interface to handle such scenario.

```TS
interface Car {
    readonly make: string;
    model: string;
    year?: number // optional property.
}
```

### Function types in interface OR Interface for functions
An interface can be used for defining the structure of a function just like <code>Type</code>
```TS
type addFn = (a: number, b: number) => number;

interface addFn {
    (a: number, b: number): number;
}
```