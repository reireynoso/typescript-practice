"use strict";
// function return types and void
function adds(n1, n2) {
    return n1 + n2;
}
// Void type. Doesn't return anything
function printsResult(num) {
    console.log('Result ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printsResult(adds(4, 12));
// let combineValues:Function; // can be explicit and state undefined variable will be a function.
// combineValues = add;
// combineValues = printResult; // TS won;t be able to detect the difference and can result in error during runtime.
let combineValues; // describe the function parameter
combineValues = adds;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result); // no type necessary. Defined earlier
    // callback won't do anything with the value returned since it was void
});
