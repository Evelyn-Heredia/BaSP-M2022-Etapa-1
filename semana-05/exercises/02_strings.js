/*
Exercise 2.
*/
console.log('--EXERCISE 2: STRINGS.');
/*Exercise 2a: Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log('-Exercise 2a.');
var myFullName = 'evelyn heredia';
console.log('My name is', myFullName.toUpperCase());
/*Exercise 2b: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2b.');
var originalString = 'This_is_an example';
var firstFiveCharac = originalString.substring (0,5);
console.log('The first five characters of the phrase "This is an example" are:', firstFiveCharac);
/*Exercise 2c: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2c.');
var origString = 'It is a wonderful day';
var lastThreeCharac = origString.substring (18,21);
console.log('The last three characters of the phrase "It is a wonderful day" are:', lastThreeCharac);
/*Exercise 2d: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2d.');
var samplePhrase = 'take your time';
var finalPhrase = samplePhrase.substring (0,1).toUpperCase() + samplePhrase.substring (15,1).toLowerCase();
console.log('This is an example of upper and lower case use:', finalPhrase);
/*Exercise 2e: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('-Exercise 2e.');
var sampleGap = 'Find me, please'
var gapFound = sampleGap.indexOf (' ');
console.log('The position of the first gap, from the beginning, in the phrase "Find me, please" is: ', gapFound, 'th.');
/*Exercise 2f: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre
medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga
la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2f.');
var mainSent = 'vaRiabLes and opeRatoRs';
var finalSent = mainSent.substring(mainSent.indexOf('v'),mainSent.indexOf('a')) .toUpperCase()
                + mainSent.substring(mainSent.indexOf('a'), mainSent.indexOf('o')) .toLowerCase()
                + mainSent.substring(mainSent.indexOf('o'), mainSent.indexOf('p')) .toUpperCase()
                + mainSent.substring(mainSent.indexOf('p')) .toLowerCase();
console.log('The phrase "', mainSent, '" should be accurately written as "', finalSent, '"');