window.onload = function(){
////////// Variables //////////
//Form label
var form = document.getElementById('em-form');
//Input field
var inputs = document.querySelectorAll('#em-form input');
//////////////////////////////////////////////////////////////////////
//Validation function for Name
var nameValidation = function(e){
    if ( inputs[0] == null || inputs[0].length == 0){
        document.getElementById('em-name-div').classList.add('em-form-group-wrong');
        document.getElementById('em-name-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-name-div .em-form-input-error').classList.add('em-form-input-error-active');
        //para usarlo para el boton submit
        return true
    } else{
        document.getElementById('em-name-div').classList.add('em-form-group-wrong');
        document.getElementById('em-name-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-name-div .em-form-input-error').classList.add('em-form-input-error-active');
        //para usarlo para el boton submit
        return false
    }
}
// Reset input field function for Name
function resetForm(e){
    document.getElementById('mail-div').classList.remove('em-form-group-wrong');
    document.getElementById('mail-div').classList.remove('em-form-group-ok');
    document.querySelector('#mail-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Name field validation
inputs[0].addEventListener('blur', nameValidation);
inputs[0].addEventListener('focus', resetForm);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Validation function for Surame
var surnameValidation = function(e){
    if ( inputs[1] == null || inputs[1].length == 0){
        document.getElementById('em-surname-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-surname-div').classList.add('em-form-group-ok');
        document.querySelector('#em-surname-div .em-form-input-error').classList.remove('em-form-input-error-active');
        //para usarlo para el boton submit
        return false
    } else{
        document.getElementById('em-surname-div').classList.add('em-form-group-wrong');
        document.getElementById('em-surname-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-surname-div .em-form-input-error').classList.add('em-form-input-error-active');
        //para usarlo para el boton submit
        return true
    }
}
// Reset input field function for surname
function resetForm(e){
    document.getElementById('surname-div').classList.remove('em-form-group-wrong');
    document.getElementById('surname-div').classList.remove('em-form-group-ok');
    document.querySelector('#surname-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Surname field validation
inputs[1].addEventListener('blur', surnameValidation);
inputs[1].addEventListener('focus', resetForm);
//////////////////////////////////////////////////////////////////////
}