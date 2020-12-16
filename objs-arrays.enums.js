"use strict";
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[];
//     role: [number, string] // marks a tuple
// } = {
var person = {
    name: "Rei",
    age: 14,
    hobbies: ['Food', "Games"],
    role: [2, 'author']
};
// enum sample
// keep track of admin status. Instead of this,
// const admin = 0;
// const read_only = 1;
// const author = 2;
// enum Role {
//     admin,
//     read_only,
//     author
// }; // behind the scenes each receives 0,1,2 in order
// const person = {
//     name: "Rei",
//     age: 14,
//     hobbies: ['Food', "Games"],
//     role: Role.admin
// };
// if(person.role === Role.admin){
//     console.log('user is admin');
// }
var favHobs;
favHobs = ["food", "games"];
// person.role.push('admin') // works
// person.role[1] = 10; // does not work since TS is expecting the second element to be a string
// person.role = [] // does not work since it's referring the elements cnnot be empty
// person.role = [0, 'admin'] // works since it follows the initial blueprint
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    // console.log(hobby.map()) // error since TS is infering hobby is a string and not an array.
}
