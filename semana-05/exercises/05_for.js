/*
Exercise 5.
*/
console.log('   EXERCISE 5.');
//Exercise 5a.
console.log('- Exercise 5a.');
var colours = ['pink', 'red', 'yellow', 'green', 'orange'];
for (var i = 0; i <= colours.length - 1; i ++){
    window.alert(colours[i]);
}
console.log('Exercise resolution displayed in window alerts');
//Exercise 5b.
console.log('- Exercise 5b.');
for (var i = 0; i <= colours.length - 1; i ++){
    window.alert(colours[i].substring(0,1).toUpperCase() + colours[i].substring(1).toLowerCase());
}
console.log('Exercise resolution displayed in window alerts');
//Exercise 5c.
console.log('- Exercise 5c.');
var sentence = ' ';
for (var i = 0; i <= colours.length - 1; i ++){
    colours[i]+= sentence;
}
window.alert(colours);
console.log('Exercise resolution displayed in the window alert');
//Exercise 5d.
console.log('- Exercise 5d.');
var emptyArray = [];
console.log('This is an empty array of 10 repetitions');
for (var i= 0; i < 10; i++){
    console.log(i);
}
