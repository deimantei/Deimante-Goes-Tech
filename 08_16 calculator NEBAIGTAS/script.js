//nelabai kas veikia
function display(val){
    document.getElementById('result').value += val
    return val
}

function clearScreen(){
    document.getElementById('result').value = ''
}

function getResult(operation) {
    const resultElement = document.getElementById('result');

switch(operation){
    case '+':
        resultElement.innerText = value + value;
        break;
    case '-':
        if (!isNaN(num1) && !isNaN(num2))
        resultElement.innerText = Number(num1) - Number(num2);
        else
        resultElement.innerText = nAnError;
        break;
    case '*':
        if (!isNaN(num1) && !isNaN(num2))    
        resultElement.innerText = Number(num1) * Number(num2);
        else
        resultElement.innerText = nAnError;
        break;
    case '/':
        if (!isNaN(num1) && !isNaN(num2))      
        resultElement.innerText = Number(num1) / Number(num2);
        else
        resultElement.innerText = nAnError;   
        break;
}
document.getElementById('result').value 
return val
}