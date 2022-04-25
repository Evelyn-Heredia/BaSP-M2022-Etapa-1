window.onload = function(){
//Form field container
var form = document.getElementById('form');
//Input field
var inputs = document.querySelectorAll('#form input');
//Email field regex
var regExMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
//Validation function
var formValidation = function(e){
    if(regExMail.test(inputs[0].value)){
        document.getElementById('mail-div').classList.remove('form-group-wrong');
        document.getElementById('mail-div').classList.add('form-group-ok');
        document.querySelector('#mail-div .form-input-error').classList.remove('form-input-error-active');
    } else{
        document.getElementById('mail-div').classList.add('form-group-wrong');
        document.getElementById('mail-div').classList.remove('form-group-ok');
        document.querySelector('#mail-div .form-input-error').classList.add('form-input-error-active');
    }
};
// Reset input field
function resetForm(e){
    document.getElementById('mail-div').classList.remove('form-group-wrong');
    document.querySelector('#mail-div .form-input-error').classList.remove('form-input-error-active');
}
//Email field validation
inputs[0].addEventListener('blur', formValidation);
inputs[0].addEventListener('focus', resetForm);
// Submit button
form.addEventListener('submit', function(e){
    e.preventDefault();
});
//Password field validation
}