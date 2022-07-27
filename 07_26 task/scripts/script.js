alert('Hello World')
let firstName = prompt('What is your First Name?');
let lastName = prompt('What is your Last Name?');
result = firstName + '\xa0' + lastName;
console.log('Hello ' + result); 
alert('Hello ' + result);

let a = prompt('Give me the first value:');
let b = prompt('Give me the second value:');
let result1= Number.parseInt(a) + Number.parseInt(b);
console.log('The result of addition is ' + result1); 
let result2= a - b;
console.log('The result of substraction is ' + result2); 
let result3= a * b;
console.log('The result of multiplication is ' + result3); 
let result4= a / b;
console.log('The result of division is ' + result4); 
alert('The result of addition is ' + result1);
alert('The result of substraction is ' + result2);
alert('The result of multiplication is ' + result3);
alert('The result of division is ' + result4);