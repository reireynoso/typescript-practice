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
- TS Overview. It adds:
    - Types => we have to more explicit about how things work and avoid many unexpected errors using types. Can use more IDEs which have built in types of support which can pick up on these types and give better auto completion and built-in errors before compiling
    - Next gen JS features (compiled down for older Browsers) => Can write JS features in TS files and then it gets compiles down to JS code to workarounds that work in older browsers. Similar to Babel but built-in to TS.
    - Non-JS features like interfaces or Generics => can't be compiled to JS but they don't to. They are for dev stage that give clearer errors and help us avoid errors beside the types.
    - Meta-programming features like Decorators => 
    - Rich configuration options => add rules to make it behave that way you want it too
    - modern tooling that helps even in non-ts projects 

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
//     age: number
// } = {
    name: "Rei",
    age: 14,
    hobbies: ['Food', "Games"]
};

let favHobs: string[];
favHobs = ["food", "games"];

console.log(person.nickname); // does not exist

for(const hobby of person.hobbies){
    console.log(hobby);
    // console.log(hobby.map()) // error since TS is infering hobby is a string and not an array.
}
```
- With TS, we have object types. Key value pairs of property and its type by default. To ensure TS only cares that it's an object, can assign property to the assignment. But TS would not know the information inside the object.
- Assign to empty curly brace. TS's notation of a specialized object type, where we provide some information about the structure of the object. In that object, we are explicitly assigning the types. Not good practice since TS can infer that
- With array, TS infers the array type based on the types inside of the array. Can contain mixed. Can explicitly state, `favHobs: any[]` to state mixed array. For specifics `favHobs: string[]`;