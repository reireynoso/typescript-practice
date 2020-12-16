# TypeScript: Getting Started
- `TypeScript` is a Javascript superset. It's a programming language building up on JS. Takes JS and adds new features and advantages to it. However, TS can't be executed by JS environments like the browser as well as NodeJS.
- TS is a programming lannguage but it's also a tool, compieler which you run over the code to compile TS code to JS. When writing TS, it's JS out of it.
- Features are compiles to JS workarounds. TS adds types to JS. Identifies errors earlier instead at runtime.
- Why TS? Extra code to check is types are correct. 
    ```js
    function add(n1, n2){
        return n1 + n2
    }

    console.log(add('2','3'))
    ```
    - Unwanted behavior at runtime
    - mitigation strategies => add if check to add function validate and sanitize user input
    - devs can still write invalid code
    - TS is a tool that helps devs write better code
- To install TS with `npm install -g typescript`. The compiler is installed. To run it, `tsc`
- Some TS syntax
```js
// can indicate to TS that inputField will always exist as an input element;
const inputField = document.querySelector("#someinputfield")! as HTMLInputElement;

// in the arguments, can indicate the type expected for parameter
function add(num1:number,num2:number){
    return num1 + num2;
}

console.log(add(2, '3'));
```
- To run file, `tsc filename.ts`. By default TS will still compile it to JS. When compiled to JS, TS is stripped out and we get vanilla JS.
- Can also enter `watch` mode so it automatically watches for any changes in the file and reload. `tsc app.js -w`
- TS Overview. It adds:
    - Types => we have to more explicit about how things work and avoid many unexpected errors using types. Can use more IDEs which have built in types of support which can pick up on these types and give better auto completion and built-in errors before compiling
    - Next gen JS features (compiled down for older Browsers) => Can write JS features in TS files and then it gets compiles down to JS code to workarounds that work in older browsers. Similar to Babel but built-in to TS.
    - Non-JS features like interfaces or Generics => can't be compiled to JS but they don't to. They are for dev stage that give clearer errors and help us avoid errors beside the types.
    - Meta-programming features like Decorators => 
    - Rich configuration options => add rules to make it behave that way you want it too
    - modern tooling that helps even in non-ts projects 

# Compiling the Entire Project
- `tsc --init` no specific file. Creates `tsconfig.json`
- `tsc` creates a js file for all
- `tsc --watch` watches all files

# Include/Exclude
- In the `tsconfig.json`, for `"exlucde": []`, can include paths in the array of files you don't want
```js
"exclude": [
    "union-aliases.ts",
    "*.dev.ts", // wildcard. ignore any file that ends with .dev.ts
    "**/*.dev.ts" //any file with that pattern in any folder will be ignored
    "node_modules" // would be default
]
"include:[
    "app.ts",
    "analytics.ts"
]" //opposite. which files would want to be part of the compilation
```
# Outline
- TypeScript Basics
- Compiler & Configuration Deep Dive
- Working with Next-gen JS Code
- Classes & Interfaces
- Advanced Types & TypeScript Features
- Generics
- Decorators
- Full Project
- Working with Namespaces & Modules
- Webpack & Typescript
- Third Party Libraries & TypeScript
- React + TS & NodeJS + TS

# TS Basics
- TS enables you to write your own types
- Core Types:
    - `number` => All nums, no differentation between intergers or floats
    - `string` => characters surrounded by backticks, double or single quotes.
    - `boolean` => true or false
    - `object` => `{age: 30}` Any JS object, more specific types (type of object) are possible.
    - `array` => `[1,2,3]` any JS array, type can be flexible or strict(regarding the element types)
    - `tuple` => `[1,2]` added by TS: Fixed array length
    - `enum` => `enum {NEW, OLD}` does not exist in JS. Added by TS: automatically enumerated global constant identifiers.
    - `any` => `*` most flexible type. This type doesn't tell TS anything. Any kind of value, no specifc type assignment. Takes away any advantage TS gives. Want to avoid. Can use as fallback when you don't know what the data will be stored.
- TS is `statically` typed where we define types of variables and parameters during development. They don't suddent change during runtime
- Key difference: JS uses `dynamic` types (resolved at runtime) and TS uses `static` types (set during development)
- We don't have explicit type of assignments to variables because TS has a built-in feature which is called `type inference`. Means TS does its best to understand which type you have in a certain variable or a constant. We can assign the name of the type after declaring the variable
```js
let number1: number = 5; // not good practice since TS can infer the type based on the value. Only good when it is undefined. So TS knows what type it'll be later when reassigned
// const number1 = 5; // with const we cannot change the value so the type is locked as well
let resultPhrase = 'Result is: ';
resultPhrase = true; // will also throw an error. TS in infering based on the intiial assignment
```
- If an property doesn't exist on an object, TS will throw an error
```js
// const person: object = {
//     name: "Rei",
//     age: 14
// };

const person: {
//     name: string,
//     age: number,
//     hobbies: string[];
//     role: [number, string] // marks a tuple
// } = {
    name: "Rei",
    age: 14,
    hobbies: ['Food', "Games"]
};

let favHobs: string[];
favHobs = ["food", "games"];

console.log(person.nickname); // does not exist

// person.role.push('admin') // works
// person.role[1] = 10; // does not work since TS is expecting the second element to be a string

// person.role = [] // does not work since it's referring the elements cnnot be empty
person.role = [0, 'admin'] // works since it follows the initial blueprint

for(const hobby of person.hobbies){
    console.log(hobby);
    // console.log(hobby.map()) // error since TS is infering hobby is a string and not an array.
}
```
- With TS, we have object types. Key value pairs of property and its type by default. To ensure TS only cares that it's an object, can assign property to the assignment. But TS would not know the information inside the object.
- Assign to empty curly brace. TS's notation of a specialized object type, where we provide some information about the structure of the object. In that object, we are explicitly assigning the types. Not good practice since TS can infer that
- With array, TS infers the array type based on the types inside of the array. Can contain mixed. Can explicitly state, `favHobs: any[]` to state mixed array. For specifics `favHobs: string[]`;
- `Tuple` is a special construct typescript could understand. In JS, it's a normal array. `Tuples` tells TS that we want to have a special array with exactly two element, w/ first element being number and second element being string. (Refer to top sample)
- Loosely related to the idea of tuple is the idea of having a couple of specific identifiers global constant that might be present in the app which might want to represent as numbers but to which you want to assign a human-readable label. We have the `enum`
```js
// enum sample
// keep track of admin status. Instead of this,
// const admin = 0;
// const read_only = 1;
// const author = 2;

enum Role {
    admin,
    read_only,
    author
}; // behind the scenes each receives 0,1,2 in order

const person = {
    name: "Rei",
    age: 14,
    hobbies: ['Food', "Games"],
    role: Role.admin
};

if(person.role === Role.admin){
    console.log('user is admin');
}

```
- `Union` type. Where a function can accept two different types of values. Using `|` symbol to indicate either types as input
```js
function combine(input1: (number | string), input2: number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
    }else{
        result = input1.toString() + input2.toString();
    }
    return result; 
}

const combinedAges = combine(30,26);

console.log(combinedAges);

const combinedNames = combine("Rei","Hey");

console.log(combinedNames);
```
- `Literal Types` types where you don't say that certain variable or parameter should a number or string but are clear about the exact value it should hold.
```js
function combine(input1: (number | string), input2: number | string, resultConversion: 'as-number' | 'as-text'){  // for the third arg, we are allowing string but strictly those strings defined using union types
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2 // converts into number
    }else{
        result = input1.toString() + input2.toString();
    }
    return result
    // if(resultConversion === 'as-number'){
    //     return +result; // parses into number
    // }
    // else{
    //     return result.toString();
    // }

    // return result; 
}

const combinedAges = combine(30,26, 'as-number');

console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine("Rei","Hey", "as-text");

console.log(combinedNames);
```
- Type `aliases`. Storing `union` types in a variable.

# Function Return Types and Void
- Based on the parameters passed in, TS can infer what type the funtion will return byt default.
- You can define the type the function returns after the parenthesis. Same thing as infering.
- `void` is the standard for a function that doesn't return anything in TS
```js
// function return types and void

function add(n1: number, n2: number){
    return n1 + n2
}

// Void type. Doesn't return anything
function printResult(num:number){
    console.log('Result ' + num)
}

console.log(printResult(add(4,12)))
```

# Function Types
- `Function` types are types that describe a function regarding the parameters and the return value of that function. 
```js
function add(n1: number, n2: number){
    return n1 + n2
}

// Void type. Doesn't return anything
function printResult(num:number){
    console.log('Result ' + num)
}
printResult(add(4,12));

// let combineValues:Function; // can be explicit and state undefined variable will be a function.
// combineValues = add;
// combineValues = printResult; // TS won;t be able to detect the difference and can result in error during runtime.

let combineValues: (a:number, b:number) => number; // describe the function parameter
combineValues = add;
console.log(combineValues(8,8))
```

# Function Types and Callbacks
```js
function addAndHandle(n1:number, n2:number, cb:(num:number) => void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10,20, (result) => {
    console.log(result); // no type necessary. Defined earlier
    // callback won't do anything with the value returned since it was void
})
```

# The Unknown Type
```js
let userInput: unknown; // cannot declare yet what user types. Similar to any
let userName:string;
// with unknown type, can reassign to any type
if(typeof userInput === 'string'){
    userName = userInput;
}
// userName = userInput;
// but the diff between unknown and any is the unknown type will stricter. Any is more flexible.
```

# The Never Type
- `never` is another type functions can return
```js
function generateError(message:string, code: number):never{
    throw {message: message, errorCode:code};
    // another one would be an infinite loop
    //while(true){}
}
// function never produces a return result. The throw crashes the script

const result = generateError('An Error Occured', 500);
console.log(result)
```

