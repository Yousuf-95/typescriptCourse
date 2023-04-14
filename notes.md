## Decorators

Definition of Decorator:
<br>
1. Decorators are essentially functions or higher-order functions depending on their usage. It can be used like:
   ```TS
   @log or @log() 
   @validate or @validate()
   ```
2. Decorators are an object-oriented programming (OOP) feature and can only be used on class or class members, not on non-class functions. The following code is not valid:
   ```TS
   @log
   function getMyHomeAddress(){
   // logic
   }
   // this is not allowed as it is not in a class.
   ```
3. Decorators allows for the addition of functionality to a class or class member without changing the original code.

4. Decorators execute when a class is defined, not when instantiated.


When you attach a function to a class as a decorator, you’ll receive the class constructor as the first parameter.
```TS
function Logger(constructor: Function) {
  console.log("Decorator function");
  console.log(constructor);
}

@Logger('LOGGING')
class Person {
  name = 'John';

  constructor() {
  console.log('Creating person object...');
  }
}
```
In the above example, "Logger" function is executed even though we donot initialize the class.

Types of decorators:

1. Class decorators
   <br>
   Class decorators are used to modify the behavior of a class at compile time.
   When you attach a function to a class as a decorator, you’ll receive the class constructor as the parameter.
   ```TS
   function Logger(constructor: Function) {
    constuctor.prototype.greet = function () {
      console.log("Hello!");
    };
   }

   @Logger
   class Person {
      name = 'John';

      constructor() {
      console.log('Creating person object...');
      }
   }

   const person1 = new Person();
   person1.greet(); // Hello!
   ```
2. Property decorators
   <br>
   Property decorators are used to modify the behavior of a class property. They can be applied to the property declaration itself, and can also be used to modify the descriptor object that describes the property's properties.
   
   The property decorator receives two arguments:
   * The prototype of the class for an instance member OR the constructor function of the class for a static member.
   * The name of the property.
   ```TS
   function ReadOnly(target: any, propertyName: string | Symbol) {
     Object.defineProperty(target, propertyName, {writable: false});
   }

   class Person {
     @ReadOnly
     name = 'John';

     constructor() {
       console.log('Creating person object...');
     }
   }

   const person1 = new Person();
   person1.name = 'David'; // throws a TypeError
   ```