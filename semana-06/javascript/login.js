window.onload = function(){
//////////// Variables ////////////
//Form label
var form = document.getElementById('form');
//Input fields - array-
var inputs = document.querySelectorAll('#form input');
//Email field regex
var regExMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
//Exit massage for the whole form
var boxGood = document.getElementById('exit-message');
//Email input value
var mailValue = document.getElementById('mail');
//Password input value
var passValue = document.getElementById('password');
//Form error message
var wrongValidation = document.getElementById('form-message');
// Log in button
var logInButton = document.getElementById('login-btn')
////////////////////////////////////////////////////////////////////////////////////
//////////// Functions ////////////
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
//Validation function for password characters
function passwordCharacValidation(){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];
    var num = 0;
    var lett = 0;
    var symbols = 0;
    for(var i = 0; i < inputs[1].value.length; i ++){
        if(numbers.includes(inputs[1].value[i])){
            num++;   
        }else if (letters.includes(inputs[1].value[i])){
            lett++;
        } else {
            symbols++
        }
    }
    if (inputs[1].value.length >= 8 && num >= 1 && lett >= 1 && symbols == 0){
        return true;
    }else {
        return false;
    }
}
function passwordValidation() {
    if(passwordCharacValidation() == true){
        document.getElementById('div-password').classList.remove('form-grp-wrng');
        document.getElementById('div-password').classList.add('form-grp-ok');
        document.querySelector('#div-password .error-text').classList.remove('error-text-active');
    } else{
        document.getElementById('div-password').classList.add('form-grp-wrng');
        document.getElementById('div-password').classList.remove('form-grp-ok');
        document.querySelector('#div-password .error-text').classList.add('error-text-active');
    }
}
//Validation function for Password
function passwordValidation() {
    var passValidation = passwordCharacValidation();
    if(passValidation === true){
        document.getElementById('password-div').classList.remove('form-group-wrong');
        document.getElementById('password-div').classList.add('form-group-ok');
        document.querySelector('#password-div .form-input-error').classList.remove('form-input-error-active');
    } else{
        document.getElementById('password-div').classList.add('form-group-wrong');
        document.getElementById('password-div').classList.remove('form-group-ok');
        document.querySelector('#password-div .form-input-error').classList.add('form-input-error-active');
    }
}
// Reset input field function for Password
function passResetForm(e){
    document.getElementById('password-div').classList.remove('form-group-wrong');
    document.getElementById('password-div').classList.remove('form-group-ok');
    document.querySelector('#password-div .form-input-error').classList.remove('form-input-error-active');
}
//Validation function for Log in button
form.onsubmit = function (e){
    e.preventDefault();
    if(mailValidation() == true && passwordValidation() == true){
        boxGood.classList.remove('hide');
        boxGood.innerHTML = 'mail: ' + mailValue.value + '/ password: ' + passValue.value;
    }else {
        wrongValidation.classList.remove('hide');
    }
}
////////////////////////////////////////////////////////////////////////////////////
//////////// Validations ////////////
//Email field validation
inputs[0].addEventListener('blur', mailValidation);
inputs[0].addEventListener('focus', resetForm);
//Password field validation
inputs[1].addEventListener('blur', passwordValidation);
inputs[1].addEventListener('focus', passResetForm);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
}
