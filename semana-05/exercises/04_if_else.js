/*
Exercise 4.
*/
console.log('   EXERCISE 4.');
//Exercise 4a.
console.log('- Exercise 4a.');
var randomNum = Math.random();
console.log('This is a random number:',randomNum);
if (randomNum >= 0.5) {
    window.alert ('Greater than 0,5');
} else {
    window.alert ('Lower than 0,5');
}
//Exercise 4b.
console.log('- Exercise 4b.');
var age = Math.round(Math.random()*101);
console.log ('Age:',age);
if (age < 2) {
    window.alert ('Bebé');
} else if ((age >= 2) && (age < 13)) {
    window.alert ('Niño');
} else if ((age >= 13) && (age <20)) {
    window.alert ('Adolescente');
} else if ((age >= 20) && (age <31)) {
    window.alert ('Joven');
} else if ((age >= 31) && (age <61)) {
    window.alert ('Adulto');
} else if ((age >= 61) && (age <76)) {
    window.alert ('Adulto mayor');
} else {
    window.alert ('Anciano');  
}

