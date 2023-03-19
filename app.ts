class Department {
    // public name: string; // 'public' access modifier is default.
    private employees: string[] = [];

    // constructor(n: string) {
    //     this.name = n;
    // }

    // sborthand syntax to initialize variable in class.
    constructor(public name: string){

    }

    describe(this: Department) {
        console.log("Department: ", this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

// Create an object from defined class above. 
let accounting = new Department('Accounting');

accounting.addEmployee("Adam");