/*let month = prompt ('Please, enter your Birthday Month:');
let day = prompt ('Please, enter your Birthday Day (1-31):');


let result;
if (month == 'January') {
    if(day<21)
    result = 'Capricorn';
    else if(day<32)
    result='Aquarius';
    else 
    alert ('January has 31 days'); 
}
else if (month == 'February'){
    if(day<20)
    result = 'Aquarius';
    else
    result = 'Pisces';
}
else if (month == 'March'){
    if(day<21)
    result = 'Pisces';
    else 
    result = 'Aries';
}
else if (month == 'April'){
    if(day<20)
    result = 'Aries';
    else 
    result = 'Taurus';
}
else if (month == 'May'){
    if(day<21)
    result = 'Taurus';
    else 
    result = 'Gemini';
}
else if (month == 'June'){
    if(day<22)
    result = 'Gemini';
    else 
    result = 'Cancer';
}
else if (month == 'July'){
    if(day<24)
    result = 'Cancer';
    else 
    result = 'Leo';
}
else if (month == 'August'){
    if(day<24)
    result = 'Leo';
    else 
    result = 'Virgo';
}
else if (month == 'September'){
    if(day<24)
    result = 'Virgo';
    else 
    result = 'Libra';
}
else if (month == 'October'){
    if(day<23)
    result = 'Libra';
    else 
    result = 'Scorpio';
}
else if (month == 'November'){
    if(day<23)
    result = 'Scorpio';
    else 
    result = 'Sagitarius';
}
else if (month == 'December'){
    if(day<22)
    result = 'Sagitarius';
    else 
    result = 'Capricorn';
}
if (result !=undefined)
alert ('Your Zodiak is ' + result)*/

let stringDate = prompt("Enter the date as yyyy-mm-dd");
let dateArr = stringDate.split("-");
let dateObj = new Date(stringDate);
let dateNotCorrect = false;
if (dateArr[2] != dateObj.getDate() || dateArr[1] != (dateObj.getMonth()+1)
|| dateArr[0] != dateObj.getFullYear()) {
    alert ('Date is not correct');
    dateNotCorrect = true;
}

if (!dateNotCorrext) {
    let result;
    switch (dateObj.getMonth()) {
    case 0:
        if(dateObj.getDate()<21)
            result = 'Capricorn';
            else
            result = 'Aquarius';
            break;
            ///same for other cases

}
alert('Zodiak is ' +result);
}