// function declaration
function add(num1, num2){
    return num1 + num2;
}

// function expression
const add2 = function add2(num1, num2){
    return num1 + num2;
}

// function expression (annonymous)
const add3 = function (number1, number2){
    return number1 + number2;
}

//arrow function
const add4 = (num1,num2)=> num1 + num2;

//console calling 
const sum1 = add(14,16);
const sum2 = add(14,16);
const sum3 = add3(14,16);
const sum4 = add4(14,16);
console.log(sum1, sum2,sum3, sum4);