/*
Exercise 3.
*/
console.log('   EXERCISE 3.');
//Exercise 3a.
console.log('- Exercise 3a.');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
            'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('These are the 5th and 11th months of the year:', months[4], 'and', months[10]);
//Exercise 3b.
console.log('- Exercise 3b.');
console.log('The months of the year in alphabetical order:', months.sort());
//Exercise 3c.
console.log('- Exercise 3c.');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
            'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
months.unshift('Start');
months.push('End');
console.log('If we add an element at the beginning and another to the end of the array,we have the following result: ', months);
//Exercise 3d.
console.log('- Exercise 3d.');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
            'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
months.shift();
months.pop();
console.log('Below an element has been removed from the beginning and another from the end of the array. Thus, the result is: ', months);
//Exercise 3e.
console.log('- Exercise 3e.');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
            'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('In this case, months have been listed backwards:',months.reverse());
//Exercise 3f.
console.log('- Exercise 3f.');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
            'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('Now, months are separated by a dash :', months.join('-'));
//Exercise 3g.
console.log('- Exercise 3g.');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
            'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('There are twelve months of the year, just to mention some of them, we can think of', months.slice(4,11));