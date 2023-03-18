class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log("Department: ", this.name);
    }
}

// Create an object from defined class above. 
let accounting = new Department('Accounting');