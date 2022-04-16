/*
Exercise 2.
*/
console.log('   EXERCISE 2.');
//Exercise 2a.
console.log('- Exercise 2a.');
var myFullName = 'evelyn heredia';
console.log('My name is', myFullName.toUpperCase());
//Exercise 2b.
console.log('- Exercise 2b.');
var originalString = 'This_is_an example';
var firstFiveCharac = originalString.substring (0,5);
console.log('The first five characters of the phrase "This is an example" are:', firstFiveCharac);
//Exercise 2c.
console.log('- Exercise 2c.');
var origString = 'It is a wonderful day';
var lastThreeCharac = origString.substring (18,21);
console.log('The last three characters of the phrase "It is a wonderful day" are:', lastThreeCharac);
//Exercise 2d.
console.log('- Exercise 2d.');
var samplePhrase = 'take your time';
var finalPhrase = samplePhrase.substring (0,1).toUpperCase() + samplePhrase.substring (15,1).toLowerCase();
console.log('This is an example of upper and lower case use:', finalPhrase);
//Exercise 2e.
console.log('- Exercise 2e.');
var sampleGap = 'Find me, please'
var gapFound = sampleGap.indexOf (' ');
console.log('The position of the first gap, from the beginning, in the phrase "Find me, please" is: ', gapFound, 'th.');
//Exercise 2f.
console.log('- Exercise 2f.');
var mainSent = 'vaRiabLes and opeRatoRs';
var finalSent = mainSent.substring(mainSent.indexOf('v'),mainSent.indexOf('a')) .toUpperCase()
                + mainSent.substring(mainSent.indexOf('a'), mainSent.indexOf('o')) .toLowerCase()
                + mainSent.substring(mainSent.indexOf('o'), mainSent.indexOf('p')) .toUpperCase()
                + mainSent.substring(mainSent.indexOf('p')) .toLowerCase();
console.log('The phrase "', mainSent, '" should be accurately written as "', finalSent, '"');