## Namespaces

Namespaces are paradigm of organizing code so that variables, functions, interfaces, or classes are grouped together within a local scope in order to avoid naming conflicts between components in the global scope.

In TypeScript, namespaces are defined using the <code>namespace</code> keyword followed by a name of choice.
By default, namespace components cannot be used in other modules or namespaces. You must export each component to make it accessible outside, using the <code>export</code> keyword as shown below. 
```TS
//stringUtility.ts
namespace StringUtility {

    export function ToCapital(str: string): string {
        return str.toUpperCase();
    }

    export function SubString(str: string, from: number, length: number = 0): string {
        return str.substr(from, length);
    }
}
```

The following JavaScript code will be generated for the above namespace:
```JS
//stringUtility.js
var StringUtility;
(function (StringUtility) {
    function ToCapital(str){
        return str.toUpperCase();
    }
    StringUtility.ToCapital = ToCapital;
    function SubString(str, from, length) {
        if (length === void 0) { length = 0; }
        return str.substr(from, length);
    }
    StringUtility.SubString = SubString;
})(StringUtility || (StringUtility = {}));
```

We can use the above <code>StringUtility</code> namespace in <code>Employee</code> module as shown below:
```TS
// employee.ts
/// <reference path="StringUtility.ts" />

export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}
```

In order to use namespace components at other places, first we need to include the namespace using the triple slash reference syntax <code>```/// <reference path="path to namespace file" />```</code>. After including the namespace file using the reference tag, we can access all the functionalities using the namespace. Above, we used the ToCapital() function like this: StringUtility.ToCapital()

<br>
Once there are multiple files involved, we’ll need to make sure all of the compiled code gets loaded. There are two ways of doing this:

1. Generate a single output JS file and link it with ```<script>``` tag in your webpage.

   Note: Remember to change below config in tsconfig.json when working with namespaces:
   ```JS
   {
       "outFile": "./path/to/file.js",
       "module": "AMD"
   }
   ```

2. Alternatively, we can use per-file compilation (the default) to emit one JavaScript file for each input file. If multiple JS files get produced, we’ll need to use <code>```<script>```</code> tags on our webpage to load each emitted file in the appropriate order, for example:
   ```HTML
      <script src="stringUtility.js" type="text/javascript" />
      <script src="employee.js" type="text/javascript" />
   ```

<br>

|Namespace | Module|
|----------|-------|
|Must use the namespace keyword and the export keyword to expose namespace components. | Uses the export keyword to expose module functionalities. |
|Used for logical grouping of functionalities with local scoping.|Used to organize the code in separate files and not pollute the global scope. |
|To use it, it must be included using triple slash reference syntax |Must import it first in order to use it elsewhere. |
|Must export functions and classes to be able to access it outside the namespace. |All the exports in a module are accessible outside the module. |
|Namespaces cannot declare their dependencies. |Modules can declare their dependencies. |
|No need of module loader. Include the .js file of a namespace using the ```<script>``` tag in the HTML page. |Must include the module loader API which was specified at the time of compilation e.g. CommonJS, require.js etc. |


### References:
* https://blog.logrocket.com/organizing-typescript-code-using-namespaces/
* https://www.tutorialsteacher.com/typescript/typescript-namespace
* https://www.typescriptlang.org/docs/handbook/namespaces.html