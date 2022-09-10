let value1 = prompt ('please, enter value 1');
let value2 = prompt ('Enter value 2');
let operation = prompt ('Enter operation: +, -, * or /');

let result;
if (operation == '+') {
    if(isNaN(value1) || isNaN(value2))
    result = value1 + value2;
    else 
    result = Number(value1) + Number(value2); 
}
else if (operation == '-'){
    if(isNaN(value1) || isNaN(value2))
    alert('Substraction can only be applied to the numbers');
    else 
    result = Number(value1) - Number(value2);
}

else if (operation == '*'){
    if(isNaN(value1) || isNaN(value2))
    alert('Multiplacation can only be applied to the numbers');
    else 
    result = Number(value1) * Number(value2);
}

else if (operation == '/'){
    if(isNaN(value1) || isNaN(value2))
    alert('Division can only be applied to the numbers');
    else 
    result = Number(value1) / Number(value2); 
}else {
    alert ('Operation is not correct');
}
if (result !=undefined)
alert ('result is' + result)