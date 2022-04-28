window.onload = function(){
//////////// Variables ////////////
//Form label
var form = document.getElementById('form');
//Input fields - array-
var inputs = document.querySelectorAll('#form input');
//Email field regex
var regExMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
// Log in button
var loginbtn = document.getElementById('login-btn');
////////////////////////////////////////////////////////////////////////////////////
//////////// Functions ////////////
//Validation function for Email
var mailValidation = function(e){
    if(regExMail.test(inputs[0].value)){
        document.getElementById('mail-div').classList.remove('form-group-wrong');
        document.getElementById('mail-div').classList.add('form-group-ok');
        document.querySelector('#mail-div .form-input-error').classList.remove('form-input-error-active');
        return true;
    } else{
        document.getElementById('mail-div').classList.add('form-group-wrong');
        document.getElementById('mail-div').classList.remove('form-group-ok');
        document.querySelector('#mail-div .form-input-error').classList.add('form-input-error-active');
        return false;
    }
}
// Reset input field function for Email
function resetForm(e){
    document.getElementById('mail-div').classList.remove('form-group-wrong');
    document.getElementById('mail-div').classList.remove('form-group-ok');
    document.querySelector('#mail-div .form-input-error').classList.remove('form-input-error-active');
}
//Validation function for password characters
function passwordCharacValidation(index){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];
    var num = 0;
    var lett = 0;
    var symbols = 0;
    for(var i = 0; i < inputs[index].value.length; i ++){
        if(numbers.includes(inputs[index].value[i])){
            num++;   
        }else if (letters.includes(inputs[index].value[i])){
            lett++;
        } else {
            symbols++
        }
    }
    if (inputs[index].value.length >= 8 && num >= 1 && lett >= 1 && symbols == 0){
        return true;
    }else {
        return false;
    }
}
//Validation function for Password
function passwordValidation() {
    var passValidation = passwordCharacValidation(1);
    if(passValidation === true){
        document.getElementById('password-div').classList.remove('form-group-wrong');
        document.getElementById('password-div').classList.add('form-group-ok');
        document.querySelector('#password-div .form-input-error').classList.remove('form-input-error-active');
        return true;
    } else{
        document.getElementById('password-div').classList.add('form-group-wrong');
        document.getElementById('password-div').classList.remove('form-group-ok');
        document.querySelector('#password-div .form-input-error').classList.add('form-input-error-active');
        return false;
    }
}
// Reset input field function for Password
function passResetForm(e){
    document.getElementById('password-div').classList.remove('form-group-wrong');
    document.getElementById('password-div').classList.remove('form-group-ok');
    document.querySelector('#password-div .form-input-error').classList.remove('form-input-error-active');
}
// Whole form validation
function formValidation(e){
    e.preventDefault();
    var validEmail = mailValidation();
    var validPasword = passwordValidation();
    if (validEmail === false && validPasword === false){
        console.log('form is wrong');
    } else if (validEmail === false || validPasword === false){
        console.log('form is wrong');
    } else {
        console.log('form is ok');
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
// Form validation
loginbtn.addEventListener('click', formValidation);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
}
