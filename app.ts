//  * Decorators
import util from 'node:util';

// Decorator function
function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
};

// Decorator factory function
function Logger2(logString: string) {
    console.log('LOGGER FACTORY');
    return function (_: Function) {
        console.log(logString);
    };
}

@Logger2('LOGGING')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

// Method decorator example
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       descriptor.configurable = value;
    };
 }
 class Person2 {
    name = 'John';

    constructor() {
       console.log('Creating person object...');
    }

    logName(name: string) {
        console.log("Hello: ", name);
    }

    @configurable(false)
    get getName() {
        console.log(this.name);
       return this.name;
    }
 }

 let person1 = new Person2();
 console.log(person1.logName('Solomon'));

// Prameter decorator example
function logParameter(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log(`logParameter ${target} ${util.inspect(target)} ${String(propertyKey)} ${parameterIndex}`);
}

class Person3 {
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