/*
Exercise 6.
*/
console.log('   EXERCISE 6.');
//Exercise 6a.
console.log('- Exercise 6a.');
function sum (x, y){
    return console.log('The sum of', x, 'plus', y, 'is equal to', x + y);
}
var sumOne = sum;
sumOne(10,20);
//Exercise 6b.
console.log('- Exercise 6b.');
function sum (x, y){
    if (isNaN(x)){
        return window.alert('Error' + ' "' + x + '" ' + 'is not a number. Introduce a valid character.');
    } else if (isNaN(y)){
        return window.alert('Error' + ' "' + y + '" ' + 'is not a number. Introduce a valid character.');
    } else {
        return console.log('The sum of', x, 'plus', y, 'is equal to', x + y);
    }
}
var sumTwo = sum;
console.log('Testing: rigth introduction of numbers:');
sumTwo(70,20);
console.log('Testing: wrong introduction of first number(letter). Window alert displayed.');
sumTwo('letter',20);
console.log('Testing: wrong introduction of second number (house). Window alert displayed.');
sumTwo(10,'house');
//Exercise 6c.
console.log('- Exercise 6c.');
function numInteger (a) {
    if (Number.isInteger(a)) {
        return true;
    } else {
        return false;
    }
}
console.log('Is this an integer? ', numInteger(5));
console.log('Is this an integer? ', numInteger(3.6));
//Exercise 6d.
console.log('- Exercise 6d.');
function sum (x, y){
    if (isNaN(x)){
        return window.alert('Error' + ' "' + x + '" ' + 'is not a number. Introduce a valid character.');
    } else if (isNaN(y)){
        return window.alert('Error' + ' "' + y + '" ' + 'is not a number. Introduce a valid character.');
    } else {
        if (numInteger(x) === false){
            window.alert('Error! '+ x + ' is not an integer. Try with ' + Math.round(x));
        } else if (numInteger(y) === false){
            window.alert('Error! '+ y + ' is not an integer. Try with ' + Math.round(y));
        } else {
            return console.log('The sum of', Math.round(x), 'plus', Math.round(y), 'is equal to', Math.round(x + y));
        }
    }
}
var sumThree = sum;
console.log('Testing: wrong introduction of first number(letter). Window alert displayed.');
sumThree('letter',20);
console.log('Testing: introduction of a decimal. Window alert displayed.');
sumThree(10,3.5);
sumThree(10,6);
//Exercise 6e.
console.log('- Exercise 6e.');
function validPara (x){
    if (isNaN(x)){
        return window.alert('Error' + ' "' + x + '" ' + 'is not a number. Introduce a valid character.');
    } else if (numInteger(x) === false){
            window.alert('Error! '+ x + ' is not an integer. Try with ' + Math.round(x));
            return Math.round(x);
    } else {
            return x;
        }
}
function finalSum (a,b){
    a = validPara(a);
    b = validPara(b);
    console.log('The sum of', a, 'plus', b, 'is equal to', a + b);
}
finalSum(5,5.8); 
