# TypeScript compiler and its configuration

### 1. Watch mode
Use this mode to autocompile file if any changes occurs in the file. This mode only watches for changes in a single file as evident from the command below.
Any of the two commands mentioned below can be used to watch for changes in file <code>app.ts</code>
```bash
tsc app.ts --watch
tsc app.ts -w
```


### 2. Watch directory
Watch for changes in a directory containing multiple TypeScript files.

- Step 1: Initialize TypeScript config file
  ```bash
  tsc --init
  ```
- Step 2: Watch for changes
  ```bash
  tsc --watch
  tsc -w
  ```

### 3. Including and excluding files
 - To include files/folders, add <code>include</code> key after <code>compilerOptions</code> key in tsconfig.sjon file and insert all file/folder names in an array.
 - To exclude files/folders, add <code>exclude</code> key after <code>compilerOptions</code> key in tsconfig.json file and insert all file/folder names in an array.
 - To include only specific files, add a list of files to be included in <code>files</code> keyword.

 ```JS
 {
  compilerOptions: {
    ....
  },
  exclude: [
    "node_modules", // default, no need to add explicitly.
    "dev.ts",
    "*.dev.ts", // exclude all files ending with .dev.ts
    "**/*.dev/.ts"  // exclude all files ending with .dev.ts in any folder
  ],
  include: [
    "app.ts"
  ],
  files: [
    "module1.ts"
  ]

 }
 ```

 ### 4. Setting a compilation target
Set Ecmascript version to compile the TypeScript code to.
 ```JS
{
  target: "es6"
}
 ```