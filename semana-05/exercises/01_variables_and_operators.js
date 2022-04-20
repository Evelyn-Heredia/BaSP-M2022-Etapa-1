// Test
console.log('Testing JS script');
/*
Exercise 1.
*/
console.log('--EXERCISE 1: VARIABLES AND OPERATORS.');
/*Exercise 1a: Crear dos variables numéricas y utilizar el operador suma
para guardar el valor de la suma de ambos números en una 3er variable. */
console.log('-Exercise 1a.');
var firstValue = 100;
var secondValue = 80;
var result = firstValue + secondValue;
console.log('The sum of ', firstValue, 'and ', secondValue, ' is equal to ', result);
/*Exercise 1b: Crear dos variables de tipo String
y concatenarlas guardando el resultado en una 3er variable */
console.log('-Exercise 1b.');
var firstName = 'Tom';
var surname = 'Rider';
var fullName = firstName + ' ' + surname;
console.log('His name is', firstName, ', his surname is', surname, '. Thus, his full name is', fullName);
/*Exercise 1c: Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length).*/
console.log('-Exercise 1c.');
var firstItem = 'This is a';
var secondItem = ' sunny day';
var allItems = firstItem.length + secondItem.length;
console.log('The phrase', '"', firstItem, secondItem, '" is a string of', allItems, 'code units long.');