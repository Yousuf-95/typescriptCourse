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