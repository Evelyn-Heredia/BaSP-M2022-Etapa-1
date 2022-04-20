/*
Exercise 6.
*/
console.log('--EXERCISE 6.');
/*Exercise 6a: Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable
en la consola del navegador.*/
console.log('-Exercise 6a.');
function sum (x, y){
    return console.log('The sum of', x, 'plus', y, 'is equal to', x + y);
}
var sumOne = sum;
sumOne(10,20);
/*Exercise 6b: A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error
y retornar el valor NaN como resultado.*/
console.log('-Exercise 6b.');
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
/*Exercise 6c: Crear una función validate integer que reciba un número como parámetro
y devuelva verdadero si es un número entero.*/
console.log('-Exercise 6c.');
function numInteger (a) {
    if (Number.isInteger(a)) {
        return true;
    } else {
        return false;
    }
}
console.log('Is this an integer? ', numInteger(5));
console.log('Is this an integer? ', numInteger(3.6));
/*Exercise 6d: A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/
console.log('-Exercise 6d.');
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
/*Exercise 6e: Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
probando que todo siga funcionando igual.*/
console.log('-Exercise 6e.');
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
