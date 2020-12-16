//create aliasing
type Combinable = number | string;
type Literal = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: Literal){
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