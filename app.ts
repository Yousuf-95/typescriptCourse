//  * Decorators

// Decorator function
function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
};

// Decorator factory function
function Logger2(logString: string) {
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

@Logger2('LOGGING')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);