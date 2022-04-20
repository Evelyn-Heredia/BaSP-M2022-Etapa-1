/*
Exercise 5.
*/
console.log('--EXERCISE 5: FOR.');
/*Exercise 5a: Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
para mostrar una alerta utilizando cada una de las palabras.*/
console.log('-Exercise 5a.');
var colours = ['pink', 'red', 'yellow', 'green', 'orange'];
for (var i = 0; i <= colours.length - 1; i ++){
    window.alert(colours[i]);
}
console.log('Exercise resolution displayed in window alerts');
/*Exercise 5b: Al array anterior convertir la primera letra de cada palabra en mayúscula
y mostrar una alerta por cada palabra modificada.*/
console.log('-Exercise 5b.');
for (var i = 0; i <= colours.length - 1; i ++){
    window.alert(colours[i].substring(0,1).toUpperCase() + colours[i].substring(1).toLowerCase());
}
console.log('Exercise resolution displayed in window alerts');
/*Exercise 5c: Crear una variable llamada “sentence” que tenga un string vacío,
luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra
dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/
console.log('-Exercise 5c.');
var sentence = ' ';
for (var i = 0; i <= colours.length - 1; i ++){
    colours[i]+= sentence;
}
window.alert(colours);
console.log('Exercise resolution displayed in the window alert');
/*Exercise 5d: Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array
con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber
10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador
el array final (utilizar console.log).*/
console.log('-Exercise 5d.');
var emptyArray = [];
console.log('This is an empty array of 10 repetitions');
for (var i= 0; i < 10; i++){
    console.log(i);
}
