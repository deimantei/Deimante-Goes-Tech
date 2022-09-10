function getResult(operation) {
    const nAnError = 'The values provided should be the numbers'
    const resultElement = document.getElementById('result');
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);
    switch(operation){
        case '+':
            if (!isNaN(num1) && !isNaN(num2))
            resultElement.innerText = Number(num1) + Number(num2);
            else
            resultElement.innerText = nAnError;
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
    clearAllInputs
}

function clearAllInputs(){
    const inputs = document.getElementById('input');
    for (let i = 0; i < inputs.lenght; i++)
    inputs[i].value='';
}