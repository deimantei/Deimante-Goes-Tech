let userLevel = prompt('enter your users level');

switch(userLevel) {
    case'admin':
    case'golden':
        console.log('user level has all the rights');
        break;
    case'regular':
        console.log('user is regular');
        break;
    default:
        console.log('the user is nothing');
}
//Crazy option:
switch(true) {
    case userLevel === 'admin':
    case userLevel === 'golden':
        console.log('user level has all the rights');
        break;
    case userLevel === 'regular':
        console.log('user is regular');
        break;
    default:
        console.log('the user is nothing');
}