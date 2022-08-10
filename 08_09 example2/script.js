function WelcomeUser(){
    const firstname = document.getElementById('firstName').value;
    const lastname = document.getElementById('lastName').value;
    const welcomeElement = 
    document.getElementById('welcome');
    welcomeElement.innerText =
        'Welcome ' + firstname + ' ' + lastname +'!';
    welcomeElement.style.border = '1px solid red';
        const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}
function hideInputSection(){
    const inputSec = document.getElementById('inputsection');
    inputSec.hidden = true;
}
function displayInputSection(){
    const inputSec = document.getElementById('inputsection');
    inputSec.hidden = false;
}
function changeColor(){
    document.body.style.color ='red';   
}

function timer(){
    document.getElementById('stopCounter').value = 'false';
        setCounterElement(10);
}
function timer60(){
    document.getElementById('stopCounter').value = 'false';
    setCounterElement(60);
}
function stopCounter(){
    document.getElementById('stopCounter').value = 'true';
}

function setCounterElement(i){
    if(i < -0 ||document.getElementById('stopCounter').value == 'true' )
    return;
    else {
document.getElementById('count').innerText = i;
setTimeout(setCounterElement, 1000, i - 1);    
}
}

// 5! = 5 * 4 * 3 * 2 * 1 
function calculateFactorial(n){
    if(n === 1)
        return 1;
    else
        return n * calculateFactorial(n - 1);
}

function setFactorial(){
    const value = Number(document.getElementById("factorialN").value);
    const factResult = calculateFactorial(value);
    document.getElementById('factorialValue').innerText = factResult;
}