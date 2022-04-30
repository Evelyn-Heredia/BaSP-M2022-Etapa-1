window.onload = function(){
//////////// Variables ////////////
//Form label
var form = document.getElementById('em-form');
//Input fields - array-
var inputs = document.querySelectorAll('#em-form input');
//Email field regex
var regExMail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
// Continue button
var continueBtn = document.getElementById('continue-btn');
////////////////////////////////////////////////////////////////////////////////////
//////////// Functions ////////////
//Validation function for NAME characters
function validCharacters(index){
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
    if (inputs[index].value.length >= 3 && num == 0 && lett >= 1 && symbols == 0){
        return true;
    }else {
        return false;
    }
}

//Validation function for Name
function nameValidation() {
    var validationOk = validCharacters(0);
    if(validationOk === true){
        document.getElementById('em-name-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-name-div').classList.add('em-form-group-ok');
        document.querySelector('#em-name-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-name-div').classList.add('em-form-group-wrong');
        document.getElementById('em-name-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-name-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for Name
function nameResetForm(e){
    document.getElementById('em-name-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-name-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-name-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Validation function for Surname
function surnameValidation() {
    var validationOk = validCharacters(1);
    if(validationOk === true){
        document.getElementById('em-surname-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-surname-div').classList.add('em-form-group-ok');
        document.querySelector('#em-surname-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-surname-div').classList.add('em-form-group-wrong');
        document.getElementById('em-surname-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-surname-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for Surname
function surnameResetForm(e){
    document.getElementById('em-surname-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-surname-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-surname-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Validation function for ID characters
function idValidCharacters(index){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    var other = 0;
    for(var i = 0; i < inputs[index].value.length; i ++){
        if(numbers.includes(inputs[index].value[i])){
            num++;   
        } else if (letters.includes(inputs[index].value[i])){
            lett++;
        } else {
            other++
        }
    }
    if (inputs[index].value.length >= 7 && num >= 1 && other == 0){
        return true;
    }else {
        return false;
    }
}
//Validation function for ID
function idValidation() {
    var validationOk = idValidCharacters(2);
    if(validationOk === true){
        document.getElementById('em-id-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-id-div').classList.add('em-form-group-ok');
        document.querySelector('#em-id-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-id-div').classList.add('em-form-group-wrong');
        document.getElementById('em-id-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-id-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for ID
function idResetForm(e){
    document.getElementById('em-id-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-id-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-id-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Validation function for Birth Date characters


//corregir la funcion de fecha
function birthDValidCharacters(index){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var date = [2022];
    var symbols = ['/', '-'];
    var num = 0;
    var actualDate = 0;
    var sym = 0;
    var other = 0;
    for(var i = 0; i < inputs[index].value.length; i ++){
        if(numbers.includes(inputs[index].value[i])){
            num++;   
        } else if (date.includes(inputs[index].value[i])){
            actualDate++;
        } else if (symbols.includes(inputs[index].value[i])){
            sym++;
        } else {
            other++
        }
    }
    if (inputs[index].value.length >= 8 && num >= 1 && actualDate === 0 && sym >= 2 && other == 0){
        return true;
    }else {
        return false;
    }
}
//Validation function for Birth Date
function birthValidation() {
    var validationOk = birthDValidCharacters(3);
    if(validationOk === true){
        document.getElementById('em-birth-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-birth-div').classList.add('em-form-group-ok');
        document.querySelector('#em-birth-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-birth-div').classList.add('em-form-group-wrong');
        document.getElementById('em-birth-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-birth-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for Birth Date
function bDateResetForm(e){
    document.getElementById('em-birth-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-birth-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-birth-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Validation function for Phone numbers
function phoneValidCharacters(index){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    var other = 0;
    for(var i = 0; i < inputs[index].value.length; i ++){
        if(numbers.includes(inputs[index].value[i])){
            num++;   
        } else if (letters.includes(inputs[index].value[i])){
            lett++;
        } else {
            other++
        }
    }
    if (inputs[index].value.length >= 10 && num >= 1 && other == 0){
        return true;
    }else {
        return false;
    }
}
//Validation function for Phone
function phoneValidation() {
    var validationOk = phoneValidCharacters(4);
    if(validationOk === true){
        document.getElementById('em-phone-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-phone-div').classList.add('em-form-group-ok');
        document.querySelector('#em-phone-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-phone-div').classList.add('em-form-group-wrong');
        document.getElementById('em-phone-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-phone-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for Phone
function phoneResetForm(e){
    document.getElementById('em-phone-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-phone-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-phone-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Validation function for ADDRESS characters
function addressCharacters(index){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];
    var space = ' ';
    var num = 0;
    var lett = 0;
    var spa = 0;
    var symbols = 0;
    for(var i = 0; i < inputs[index].value.length; i ++){
        if(numbers.includes(inputs[index].value[i])){
            num++;   
        }else if (letters.includes(inputs[index].value[i])){
            lett++;
        } else if (space.includes(inputs[index].value[i])){
            spa++;
        } else {
            symbols++
        }
    }
    if (inputs[index].value.length >= 5 && num >= 1 && lett >= 1 && spa >= 1 && symbols == 0){
        return true;
    }else {
        return false;
    }
}
//Validation function for address
function addressValidation() {
    var validationOk = addressCharacters(5);
    if(validationOk === true){
        document.getElementById('em-address-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-address-div').classList.add('em-form-group-ok');
        document.querySelector('#em-address-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-address-div').classList.add('em-form-group-wrong');
        document.getElementById('em-address-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-address-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for address
function addressResetForm(e){
    document.getElementById('em-address-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-address-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-address-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Validation function for CITY characters
function cityCharacters(index){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];
    var space = ' ';
    var num = 0;
    var lett = 0;
    var spa = 0;
    var symbols = 0;
    for(var i = 0; i < inputs[index].value.length; i ++){
        if(numbers.includes(inputs[index].value[i])){
            num++;   
        }else if (letters.includes(inputs[index].value[i])){
            lett++;
        } else if (space.includes(inputs[index].value[i])){
            spa++;
        } else {
            symbols++
        }
    }
    if (inputs[index].value.length >= 5 && num >= 1 && lett >= 1 && spa >= 1 && symbols == 0){
        return true;
    }else {
        return false;
    }
}
//Validation function for city
function cityValidation() {
    var validationOk = cityCharacters(6);
    if(validationOk === true){
        document.getElementById('em-city-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-city-div').classList.add('em-form-group-ok');
        document.querySelector('#em-city-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-city-div').classList.add('em-form-group-wrong');
        document.getElementById('em-city-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-city-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for city
function cityResetForm(e){
    document.getElementById('em-city-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-city-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-city-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Validation function for POSTAL CODE characters
function pcValidCharacters(index){
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var num = 0;
    var other = 0;
    for(var i = 0; i < inputs[index].value.length; i ++){
        if(numbers.includes(inputs[index].value[i])){
            num++;   
        } else if (letters.includes(inputs[index].value[i])){
            lett++;
        } else {
            other++
        }
    }
    if (inputs[index].value.length <=5 && num >= 4 && other == 0){
        return true;
    }else {
        return false;
    }
}
//Validation function for POSTAL CODE
function pcValidation() {
    var validationOk = pcValidCharacters(7);
    if(validationOk === true){
        document.getElementById('em-pc-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-pc-div').classList.add('em-form-group-ok');
        document.querySelector('#em-pc-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-pc-div').classList.add('em-form-group-wrong');
        document.getElementById('em-pc-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-pc-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for POSTAL CODE
function pcResetForm(e){
    document.getElementById('em-pc-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-pc-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-pc-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Validation function for Email
var emailValidation = function(e){
    if(regExMail.test(inputs[8].value)){
        document.getElementById('em-email-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-email-div').classList.add('em-form-group-ok');
        document.querySelector('#em-email-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-email-div').classList.add('em-form-group-wrong');
        document.getElementById('em-email-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-email-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for Email
function emailResetForm(e){
    document.getElementById('em-email-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-email-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-email-div .em-form-input-error').classList.remove('em-form-input-error-active');
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
    var passValidation = passwordCharacValidation(9);
    if(passValidation === true){
        document.getElementById('em-password-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-password-div').classList.add('em-form-group-ok');
        document.querySelector('#em-password-div .em-form-input-error').classList.remove('em-form-input-error-active');
    } else{
        document.getElementById('em-password-div').classList.add('em-form-group-wrong');
        document.getElementById('em-password-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-password-div .em-form-input-error').classList.add('em-form-input-error-active');
    }
}
// Reset input field function for Password
function passResetForm(e){
    document.getElementById('em-password-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-password-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-password-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
//Validation function for Repeat password
function passwordValidation2() {
    var passValidation = passwordCharacValidation(9);
    var passValidation2 = passwordCharacValidation(10);
    if(passValidation === true && passValidation2 === true && passValidation.value === passValidation2.value ){
        document.getElementById('em-repeat-password-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-repeat-password-div').classList.add('em-form-group-ok');
        document.querySelector('#em-repeat-password-div .em-form-input-error').classList.remove('em-form-input-error-active');
        return true;
    } else{
        document.getElementById('em-repeat-password-div').classList.add('em-form-group-wrong');
        document.getElementById('em-repeat-password-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-repeat-password-div .em-form-input-error').classList.add('em-form-input-error-active');
        return false;
    }
}
// Reset input field function for Repeat password
function pass2ResetForm(e){
    document.getElementById('em-repeat-password-div').classList.remove('em-form-group-wrong');
    document.getElementById('em-repeat-password-div').classList.remove('em-form-group-ok');
    document.querySelector('#em-repeat-password-div .em-form-input-error').classList.remove('em-form-input-error-active');
}
// Whole form validation
function formValidation(e){
    e.preventDefault();
    var validEmail = nameValidation();
    var validSurname = surnameValidation();
    var validId = idValidation();
    var validBirth = birthValidation();
    var validPhone= phoneValidation();
    var validAddress = addressValidation();
    var validCity = cityValidation();
    var validPc = pcValidation();
    var validPasword = passwordValidation();
    var validPasword2 = passwordValidation2();
    if (validEmail === false  && validSurname === false && validId === false && validBirth === false && validPhone === false && validAddress === false && validCity === false && validPc === false && emailValidation === false && validPasword === false && validPasword2 === false){
        document.getElementById('em-message-div').classList.add('em-form-group-wrong');
        document.getElementById('em-message-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-message-div .em-form-input-error').classList.add('em-form-input-error-active');
    } else if (validEmail === false || validSurname === false || validId === false || validBirth === false || validPhone === false || validAddress === false || validCity === false || validPc === false || emailValidation === false || validPasword === false || validPasword2 === false){
        document.getElementById('em-message-div').classList.add('em-form-group-wrong');
        document.getElementById('em-message-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-message-div .em-form-input-error').classList.add('em-form-input-error-active');
    } else {
        document.getElementById('exit-div').classList.remove('form-group-wrong');
        document.getElementById('exit-div').classList.add('form-group-ok');
        exitMessage.innerHTML = 'Email: ' + inputs[0].value + ' Password: ' + inputs[1].value;
    }/*
    if (inputs[0].value === "rose@radiumrocket.com" && inputs[1].value === "BaSP2022"){ //para el caso del sign up hay que agregar todos los demás campos com direc, tel, etc
        fetch ("https://basp-m2022-api-rest-server.herokuapp.com/login?email=rose@radiumrocket.com&password=BaSP2022")
            .then(function(data){
                console.log(data);
                return data.json(); //aca va lo que hay que hacer si esta todo bien y además agregar los dos puntos que se piden para el sign up (local storage)
            })
            .then(function(answer){
                console.log(answer)
                alert('The form was successfully sent: ' + JSON.stringify(answer));
            })
            .catch(function(error){
                alert('The form was not sent' + error ); //aca va lo que hay que hacer si hay error en la request
            })
    }*/
}
////////////////////////////////////////////////////////////////////////////////////
//////////// Validations ////////////
//Name field validation
inputs[0].addEventListener('blur', nameValidation);
inputs[0].addEventListener('focus', nameResetForm);
//Surname field validation
inputs[1].addEventListener('blur', surnameValidation);
inputs[1].addEventListener('focus', surnameResetForm);
//ID validation
inputs[2].addEventListener('blur', idValidation);
inputs[2].addEventListener('focus', idResetForm);
//Birth Date validation
inputs[3].addEventListener('blur', birthValidation);
inputs[3].addEventListener('focus', bDateResetForm);
//Birth Date validation
inputs[4].addEventListener('blur', phoneValidation);
inputs[4].addEventListener('focus', phoneResetForm);
//Address validation
inputs[5].addEventListener('blur', addressValidation);
inputs[5].addEventListener('focus', addressResetForm);
//City validation
inputs[6].addEventListener('blur', cityValidation);
inputs[6].addEventListener('focus', cityResetForm);
//Postal Code validation
inputs[7].addEventListener('blur', pcValidation);
inputs[7].addEventListener('focus', pcResetForm);
//Email field validation
inputs[8].addEventListener('blur', emailValidation);
inputs[8].addEventListener('focus', emailResetForm);
//Password field validation
inputs[9].addEventListener('blur', passwordValidation);
inputs[9].addEventListener('focus', passResetForm);
//Repeat password field validation
inputs[10].addEventListener('blur', passwordValidation2);
inputs[10].addEventListener('focus', pass2ResetForm);
// Form validation
continueBtn.addEventListener('click', formValidation);
}