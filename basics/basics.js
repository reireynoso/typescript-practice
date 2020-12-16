"use strict";
function add(n1, n2, showResult, phrase) {
    // redundant as TS prevents the need for it
    // if(typeof n1!=='number' || typeof n2!== 'number'){
    //     throw new Error('Incorrect input')
    // }
    const result = n1 + n2;
    if (showResult) {
        // console.log(n1 + n2);
        console.log(phrase + result);
    }
    else {
        return result;
        ;
    }
}
let number1; // not good practice since TS can infer the type based on the value. Only good when it is undefined. So TS knows what type it'll be later when reassigned
number1 = 5;
// const number1 = 5; // with const we cannot change the value so the type is locked as well
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
// resultPhrase = true;
const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
