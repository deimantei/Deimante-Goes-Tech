let a = prompt('Give me the first value:');
let b = prompt('Give me the second value:');

if (a == String || b == String ){
    alert('Please use numbers ');
}

let statement = prompt('What do you want to do? (+,-,*,/):');


if (statement == '+'){
    let result1= Number.parseInt(a) + Number.parseInt(b);
    alert('The result of addition is ' + result1);
}
if (statement == '-'){
    let result2= a - b;
    alert('The result of substraction is ' + result2);
}
if (statement == '*'){
    let result3= a * b;
    alert('The result of multiplication is ' + result3);
}
if (statement == '/'){
    let result4= a / b;
    alert('The result of division is ' + result4);
}



if (statement !== '+' || '-' || '*'|| '/') {
    alert('Please use symbols: +,-,*,/');
}



