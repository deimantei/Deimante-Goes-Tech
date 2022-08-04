let arr = [];
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