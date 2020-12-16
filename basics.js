"use strict";
function add(n1, n2, showResult, phrase) {
    // redundant as TS prevents the need for it
    // if(typeof n1!=='number' || typeof n2!== 'number'){
    //     throw new Error('Incorrect input')
    // }
    var result = n1 + n2;
    if (showResult) {
        // console.log(n1 + n2);
        console.log(phrase + result);
    }
    else {
        return result;
        ;
    }
}
var number1; // not good practice since TS can infer the type based on the value. Only good when it is undefined. So TS knows what type it'll be later when reassigned
number1 = 5;
// const number1 = 5; // with const we cannot change the value so the type is locked as well
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
// resultPhrase = true;
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
