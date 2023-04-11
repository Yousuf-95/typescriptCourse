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