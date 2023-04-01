# TypeScript Classes and Interfaces

The only job of an interface in TypeScript is to describe a type. While class and function deal with implementation, interface helps us keep our programs error-free by providing information about the shape of the data we work with. Interfaces can only contain variables and methods in their definition.

## Uses of TypeScript Interfaces:
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

## Readonly property in Interface
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

## Extending interfaces
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

## Optional properties in interfaces
Not all use cases require strict implementation of all properties or methods in an interface. In such cases, optional properties can be defined in an interface to handle such scenario.

```TS
interface Car {
    readonly make: string;
    model: string;
    year?: number // optional property.
}
```

## Function types in interface OR Interface for functions
An interface can be used for defining the structure of a function just like <code>Type</code>
```TS
type addFn = (a: number, b: number) => number;

interface addFn {
    (a: number, b: number): number;
}
```


## Classes

TypeScript offers full support for the class keyword introduced in ES2015.
```TS
class Point {} // an empty class
```

## Fields in a class
Fields declared in a class without any prefix (like readonly) will create a public writeable property on a class.
Fields may be prefixed with the <code>readonly</code> modifier. This prevents assignment to the field outside of constructor.
```TS
class Point {
    x: number;
    y: number;
    readonly intersection: number;

    // x = 0;
    // y = 0; // fields can also be initialized.

    constructor(intersection?: number) {
        this.intersection = intersection;
    }
}

let point1 = new Point();
point1.x = 3;
point1.y = 3;
point1.intersection = 3 // will throw an error.
```

## Static fields
Classes may have static members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself.
```TS
class Point {
    x: number;
    y: number;
    static intersection = 3;
}
console.log(Point.x); // 3
```
Static members can also use the same public, protected, and private visibility modifiers:
```TS
class Point {
    x: number;
    y: number;
    private static intersection = 3;
}
console.log(Point.x); // will throw an error
```
Static members are also inherited
```TS
class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
} 
```
## Special static field names
It’s generally not safe/possible to overwrite properties from the <code>Function</code> prototype. Because classes are themselves functions that can be invoked with <code>new</code>, certain static names can’t be used. Function properties like <code>name</code>, <code>length</code>, and <code>call</code> aren’t valid to define as static members.
```TS
class Base {
  static name = "Base!"; // not possible 
}
```

## Constructors
A constructor is a method that runs every time a new instance of the class is created. This can be used to initialize values in the class.
```TS
class Point {
    x: number;
    y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
```
The parameters in the constructor is not optional in the example above. This means that when you instantiate the class, you must pass the parameters to the constructor.

## Interitance
A class can extend (inherit) only one other class but can implement multiple interfaces.
```TS
class Base {
    name: string;
}

class Derived extends Base {
    derivedName: string;
}

interface Base1 {
    name: strig;
}

interface Base2 {
    group: string;
}

interface Derived implements Base1, Base2 {
    name:  string;
    group: string;
}
```

## Super Calls
If you have a base class, you’ll need to call <code>super();</code> in your constructor body before using any this. members:
```TS
class Vehicle {
    make: string;
    model: number;

    constructor(make: string, model: number) {
        this.make = make;
        this.model = model;
    }
 }

class Car extends Vehicle {
    type: string;    

     constructor(make: string, model: number, type: string) {
       super(make, model);
       this.type = type; // must be set after calling super();
     }
}
let honda = new Car("Honda");
honda.getMake(); // Make: Honda
console.log(honda.make); // This will throw an error.
```

## Abstract classes
Abstract classes are similar to normal classes, with two major differences.
1. They cannot be directly instantiated
2. They may contain abstract members
   
Abstract members are members that must be implemented in inheriting classes. They do not have an implementation in the abstract class itself. When you mark a class as abstract, you are saying that this class has missing functionality that should be implemented in inheriting classes.
```TS
abstract class Vehicle {
    make: string;
    model: number;
    type: string;

    abstract vehicleInfo(): void;
}

class Car extends Vehicle {
    vehicleInfo(): void {
        console.log("This is a class for cars");
    }
}
```

## Class fields visibility
Visibility refers to how code outside of an instantiated class can interact with a member inside the class. Class members in TypeScript may have three possible visibility modifiers: public, protected, and private.
1. Public: This is the default visibility of class members in TypeScript. When you do not add the visibility modifier to a class member, it is the same as setting it to public. Public class members may be accessed anywhere, without any restrictions.
 ```TS
 class Vehicle {
    readonly make: string;
    public model: number;
    public type: string;

    constructor(make: string, model: number, type: string) {
        this.make =  make;
        this.model = model;
        this.type = type;
    }

    public getDetails() {
        console.log("Model: " + this.model + "  type: " + this.type);
    }
 }
 let honda = new Vehicle("Honda", 2022, "pickup");
 console.log(honda.model); // 2022
 console.log(honda.type); // pickup
 honda.getDetails(); // Make: Honda  Type: puckup
 ```

2. Protected: Class members with the protected visibility are only allowed to be used inside the class they are declared in or in the subclasses of that class.
```TS
class Vehicle {
    protected make: string;

    constructor(make: string, model: number, type: string) {
        this.make =  make;
    }
 }

class Car extends Vehicle {
  getMake() {
    return `Make: ${this.make}`;
  }
}
let honda = new Car("Honda");
honda.getMake(); // Make: Honda
console.log(honda.make); // This will throw an error.
```

3. Private: Private members are only accessible inside the class that declares them. This means that not even subclasses have access to it.
```TS
class Vehicle {
    private make: string;

    constructor(make: string, model: number, type: string) {
        this.make =  make;
    }
 }

class Car extends Vehicle {
  getMake() {
    return `Make: ${this.make}`;
  }
}
let honda = new Car("Honda");
honda.getMake(); // This will trow an error
```