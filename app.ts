class Department {
    private readonly id: string;
    public name: string; // 'public' access modifier is default.
    protected employees: string[] = [];

    constructor(id: string, n: string, ) {
        this.name = n;
        this.id = id;
    }

    // sborthand syntax to initialize variable in class.
    // constructor(public name: string){

    // }

    describe(this: Department) {
        console.log("Department: ", this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

// Inheriting 'Department' class
class ITDepartment extends Department {
    admins: string[];

    constructor(id: string,  admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }

    // Override method of class 'Department`'
    addEmployee(employee: string) {
        if (employee === 'David') {
            return;
        }
        this.employees.push(employee);
    }
}

// Create an object from defined class above. 
let accounting = new Department('d1', 'Accounting');

accounting.addEmployee("Adam");

let it = new ITDepartment('d2', ['David']);
console.log(it);