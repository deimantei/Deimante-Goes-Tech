let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
//'Fifteen is 15 and 
//not 20.'

console.log(a == b);
//If it is true it returns true, 
//if it is not it retuns false.
//THIS IS FALSE

let c = 10;
console.log(b == c);
//THIS IS TRUE
console.log(a == b);
let cstr = '10';
console.log(c == cstr);
//THIS IS TRUE
console.log(c === cstr);
//=== strictly compares. THIS IS FALSE, because c is number, cstr is string
c = c + 2;
c += 2;
c = c * 2;
c *= 2;
console.log(c == Number(cstr));
console.log(c !== Number(cstr));
// ! - opposite
let currentDate = new Date;
console.log(currentDate);

let statement = true;
let statement2 = false
if (statement){
    alert('statement is true');
}else {
    alert('statement is not true');
}
if (statement2){
    alert('do something');
}else {
    alert('do something else');
}

if (statement){
    alert('statement is true');
}if (!statement){
    alert('statement is not true');
}
else
    alert('Hello') //galima be skliaustu rasyt
    

