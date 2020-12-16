"use strict";
var userInput; // cannot declare yet what user types. Similar to any
var userName;
// with unknown type, can reassign to any type
if (typeof userInput === 'string') {
    userName = userInput;
}
// userName = userInput;
// but the diff between unknown and any is the unknown type will stricter. Any is more flexible.
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // another one would be an infinite loop
    //while(true){}
}
// function never produces a return result. The throw crashes the script
var results = generateError('An Error Occured', 500);
console.log(results);
