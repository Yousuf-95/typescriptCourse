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

### Example
When you attach a function to a class as a decorator, you’ll receive the class constructor as the first parameter.
```TS
function Logger(constructor: Function) {
  console.log("Decorator function");
  console.log(constructor);
}

@Logger('LOGGING')
class Person {
  name = 'Max';

  constructor() {
  console.log('Creating person object...');
  }
}
```
In the above example, "Logger" function is executed even though we donot initialize the class.