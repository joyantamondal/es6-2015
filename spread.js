// 3(dot) ... means spread operator 
const numbers = [23,65,99,21,34];
//take array
// console.log(numbers);
// take array value 
// console.log(...numbers);
// system 1
const max = Math.max(23,99,65);
console.log(max);
// system 2
const maxInArray = Math.max(...numbers);
console.log(maxInArray);

// array push 
numbers.push(1000);
console.log(numbers);

// new array create 
const numbers2 = numbers;
numbers.push(500);
console.log(numbers2);

// two dimentional array create 
const numbers3 = [numbers];
numbers.push(1500);
console.log(numbers3);

// two dimentional array create 
const numbers4 = [...numbers];
numbers.push(1500);
console.log(numbers);
console.log(numbers4);

// two dimentional array add element 
const numbers5 = [0,...numbers, 1];
console.log(numbers);
console.log(numbers5);



