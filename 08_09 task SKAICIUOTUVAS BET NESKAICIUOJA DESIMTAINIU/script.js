function addition() {
    const a = $('#val1').val();
    //document.getElementById('val1').value;
    const b = $('#val2').val();//document.getElementById('val2').value;
    let result= Number.parseInt(a) + Number.parseInt(b);
    document.getElementById('result').innerText =
    'result is ' + result;
}

function substraction() {
    const a = document.getElementById('val1').value;
    const b = document.getElementById('val2').value;
    let result= a - b;
    document.getElementById('result').innerText =
    'result is ' + result;
}

function multiplication() {
    const a = document.getElementById('val1').value;
    const b = document.getElementById('val2').value;
    let result= a * b;
    document.getElementById('result').innerText =
    'result is ' + result;
}

function division() {
    const a = document.getElementById('val1').value;
    const b = document.getElementById('val2').value;
    let result= a / b;
    document.getElementById('result').innerText =
    'result is ' + result;
}

