let arr = [];
for (var i = 0; i < 5; i++) {
    arr.push(prompt('Enter value' + (i+1)));
}
alert('Your array: ' + arr);

//arr.sort((a, b) => a - b);
//alert('Your sorted array: ' + arr);

let negatives = arr.filter(function(number) {
    return number < 0;
  });
alert('Negative elements: ' + negatives);

let odds = arr.filter(number => {
    return number % 2 !== 0;
  });
  alert('Odd elements: ' + odds);

  alert('There are ' + odds.length +' odd element(s)');

 //let arr2 = arr.filter(function(index) {
 //   return index % 2 !== 0;
 //});
let arr2 = [];
 for (let i = 1; i < arr.length; i += 2) {
    arr2.push(arr[i]);
  }
  alert('Each second element: ' + arr2);
  
/*function findAverage(arr) {
    let average = 0;
    for (let i=0; i < arr.length; i++){
        let currentNum = arr[i]
        average += parseInt(currentNum); 
    }
    average = average/ arr.length
  }
alert('Average: ' + average);*/