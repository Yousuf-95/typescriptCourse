## Decorators

### Definition of Decorator:

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

### Types of decorators:

1. Class decorators
   
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

3. Accessor decorators:
   
   An Accessor Decorator is declared just before an accessor declaration. The accessor decorator is applied to the Property Descriptor for the accessor and can be used to observe, modify, or replace an accessor’s definitions.
   The accessor decorator receives three arguments:
   * The prototype of the class for an instance member OR the constructor function of the class for a static member.
   * The name of the member (name of accessor)
   * The Property Descriptor for the member.

   The descriptor in the accessor decorator has four components – get, set, enumerable, and configurable. Enumerable indicates that the data can be displayed in <code>for..in</code> loop and, configurable means that the data can be modified.
   ```TS
   function configurable(value: boolean) {
      return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
         descriptor.configurable = value;
      };
   }

   class Person {
      name = 'John';

      constructor() {
         console.log('Creating person object...');
      }

      @configurable(false)
      get getName() {
         return this.name;
      }
   }
   ```
4. Method decorators:
   
   The implementation of method decorators is very similar to accessor decorators.
   The method decorator also receives three arguments:
   * The prototype of the class for an instance member OR the constructor function of the class for a static member.
   * The name of the member (name of method)
   * The Property Descriptor for the member.

    The descriptor in method decorator has four components – value, writable, enumerable, and configurable.<br>
    Value field has the function definition itself.<br>
    Writable indicates if the property can be changed with an assignment operator.<br>
    Enumerable indicates that the data can be displayed in <code>for..in</code> loop and,<br>
    Configurable means that the data can be modified.
   ```TS
   function enumerable(value: boolean) {
     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       descriptor.enumerable = value;
     };
   }

   class Person {
    name = 'John';

    constructor() {
      console.log('Creating person object...');
    }

    @enumerable(false)
    greet() {
      console.log("Hello!");
    }
   }
    ```
5. Parameter decorators:
   
   Parameter decorators are attached to the parameters of class constructors, or class member methods.
   The parameter decorator receives three arguments:
   * The prototype of the class for an instance member OR the constructor function of the class for a static member.
   * A string giving the name of the property
   * The ordinal index of the parameter in the function’s parameter list
  
   The first two arguments are similar to the arguments supplied to property and accessor decorator functions. The third refers to the position within the parameter list of a class method.
   ```TS
   function logParameter(target: Object, propertyKey: string | symbol, parameterIndex: number) {
       console.log(`logParameter ${target} ${util.inspect(target)} ${String(propertyKey)} ${parameterIndex}`);
   }

   class Person {
    name:string;
    age: number;

    constructor(name:string, age:number) {
      console.log('Creating person object...');
      this.name = name;
      this.age = age;
    }

    updateDetails(@logParameter name:string, @logParameter age:number) {
        this.age = age;
        this.name = name;
    }
   }

   // Output: 
   // logParameter [object Object] {} updateDetails 1
   // logParameter [object Object] {} updateDetails 0
   ```
   Parameter decorator serves primarily as a marker adding information to a method parameter. The official documentation clearly says this:
   > A parameter decorator can only be used to observe that a parameter has been declared on a method.
   
### Decorator factory
The decorator factory is a function that returns the decorator function itself. This enables you to customize the behavior of your decorators by passing some parameters in the factory. In the example below, we can change <code>configurable</code> property as required in different scenarios.
```TS
function configurable(value: boolean) {
 return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
 };
}

class Person {
 name = 'John';

 constructor() {
   console.log('Creating person object...');
 }

 @configurable(false)
 get getName() {
   return this.name;
 }
}
```

### Order of execution of decorators and decorator factories
In the example below, the decorator factory function executes from top to bottom, i.e, <code>DecoratorFactory1</code> is  executed first followed by <code>DecoratorFactory2</code> while the decorators themselves are executed bottom to top, i.e, decorator function 2 is executed first followed by decorator function 1.
```TS
function DecoratorFactory1(logString: string) {
  // Decorator function 1
  return function(constructor: Function) {
    console.log(logString);
  }
}

function DecoratorFactory2(logValue: string) {
  // Decorator function 2
  return function(constructor: Function) {
    console.log(logValue);
  }
}
@DecoratorFactory1('Decorator 1')
@DecoratorFactory2('Decorator 2')
class Person {
 name = 'John';
 ...
}
```