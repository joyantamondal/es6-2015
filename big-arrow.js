// system 1
const add = (num1,num2) => num1 + num2;

// system 2
const multiply = (num1,num2,num3) => num1 + num2 + num3;

//system 3 if one parameter then no need brackets 
const fiveItems = num => num * 10;

// system 4 for name string related
const getName = () => 'Joyanta Mondal';

// system 5
const doMath = (x,y)=>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

// console calling 
const sum = add(10,20);
console.log('system1 ',sum);

const mSum = multiply(10,20,30);
console.log('system2 ',mSum);

const result = fiveItems(5);
console.log('system3 ',result);

const name = getName();
console.log('system4 ',name);

const total = doMath(12,5);
console.log('system5 ',total);

/*
 //just showing what can we do using arrow. multiline work using arrow function dom
document.getElementById('my-button').addEventListener(event =>{

}) 
*/
