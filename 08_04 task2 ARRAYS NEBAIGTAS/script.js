/*let arr = [];
for (var i = 0; i < 3; i++) {
    arr.push(prompt('Enter value' + (i+1)));
}

arr.sort((a, b) => a - b);
alert('Your sorted array: ' + arr);

/*if (isNaN[0]||isNaN[1]|| isNaN[2]){
    alert('Only numbers are allowed!');}
else {
    alert('Your sorted array: ' + arr);
}*/
let entry = '';
let array = [];
while (entry != 'STOP') {
    entry = prompt('Enter array value (enter STOP to stop');
    if(entry == 'STOP')
    break;

    if(!Number(entry)) {
        alert('The entry is not a number');
        continue;
    }
    let number = Number(entry);
    array.push(number);
    }
    for(let i=0; i<array.length -1; i++) {
        for(let j=0; j<array.length -1; j++){
            if(array[j]>array[j+1]) {
                let bufferVal = array[j];
                array[j] = array[j+1];
                array[j+1] = bufferVal;
            }        
        }
    }
    alert(array.toString());
    alert(array.sort());

