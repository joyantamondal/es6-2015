// add number 
function add(num1, num2=0){
    const total = num1 + num2;
    return total;
}
const result = add(10,20);
console.log(result);
// add full name
function fullName(firstName, lastName=' '){
    const name = firstName + lastName;
    return name;
}
const userName = fullName('Joyanta');
console.log(userName);