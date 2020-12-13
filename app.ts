// const person: {
//     name: string,
//     age: number
// } = {
const person = {
    name: "Rei",
    age: 14,
    hobbies: ['Food', "Games"]
};

let favHobs: string[];
favHobs = ["food", "games"];

console.log(person);

for(const hobby of person.hobbies){
    console.log(hobby);
    // console.log(hobby.map()) // error since TS is infering hobby is a string and not an array.
}