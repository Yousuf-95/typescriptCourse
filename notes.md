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
  tsc init
  ```
- Step 2: Watch for changes
  ```bash
  tsc --watch
  tsc -w
  ```