window.onload = function(){
//Form label
var form = document.getElementById('form');
//Input field
var inputs = document.querySelectorAll('#form input');
//Email field regex
var regExMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
//Validation function for Email
var mailValidation = function(e){
    if(regExMail.test(inputs[0].value)){
        document.getElementById('mail-div').classList.remove('form-group-wrong');
        document.getElementById('mail-div').classList.add('form-group-ok');
        document.querySelector('#mail-div .form-input-error').classList.remove('form-input-error-active');
    } else{
        document.getElementById('mail-div').classList.add('form-group-wrong');
        document.getElementById('mail-div').classList.remove('form-group-ok');
        document.querySelector('#mail-div .form-input-error').classList.add('form-input-error-active');
    }
}
// Reset input field function for Email
function resetForm(e){
    document.getElementById('mail-div').classList.remove('form-group-wrong');
    document.getElementById('mail-div').classList.remove('form-group-ok');
    document.querySelector('#mail-div .form-input-error').classList.remove('form-input-error-active');
}
//Email field validation
inputs[0].addEventListener('blur', mailValidation);
inputs[0].addEventListener('focus', resetForm);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Letters
var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];
// Numbers
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
// Symbols
var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];
//Password content test
function passwordValidation(e){
    var lettersLength = 0;
    var digitsLength = 0;
    var symbolsLength = 0;
    for(var i= 0; i < inputValue.length; i++){
        var inputName = inputValue[i]
        if (letters.indexOf(inputName) != -1){
            lettersLength++;
        } else if (numbers.indexOf(inputName) != -1){
            digitsLength++;
        } else if (symbols.indexOf(inputName) != -1){
            symbolsLength++;
        }
    }
}
if(numberOfLetters > 4 && numericChar > 2 && numberOfSymbols === 0) {
    document.getElementById('password-div').classList.remove('form-group-wrong');
    document.getElementById('password-div').classList.add('form-group-ok');
    document.querySelector('#password-div .form-input-error').classList.remove('form-input-error-active');
} else {
    document.getElementById('password-div').classList.add('form-group-wrong');
    document.getElementById('password-div').classList.remove('form-group-ok');
    document.querySelector('#password-div .form-input-error').classList.add('form-input-error-active');
}
//Password validation
inputs[1].addEventListener('blur', passwordValidation);
inputs[1].addEventListener('focus', resetForm);

}
