window.onload = function(){
    //Form label variable
    var form = document.getElementById('em-form');
    //Input fields - array-
    var inputs = document.querySelectorAll('#em-form input');
    //Email field regex
    var mailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    // Form exit message
    var exitMessage = document.getElementById('em-exit-div');
    // Create button
    var createBtn = document.getElementById('create-btn');
    //////////// Functions ////////////
    //Validation function for NAME, SURNAME, and CITY characters
    function validCharacters(index){
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
        if (inputs[index].value.length >= 4 && num == 0 && lett >= 1 && spa == 0 && symbols == 0){
            return true;
        }else {
            return false;
        }
    }
    //Validation function for ID, POSTAL CODE and PHONE characters
    function validNumbers(index, num1, num2){
        var numbers = ['0','1','2','3','4','5','6','7','8','9'];
        var letters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"];
        var num = 0;
        var lett = 0;
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
        if (inputs[index].value.length <= num1 && num >= num2 && lett == 0 && other == 0){
            return true;
        }else if (isNaN(index)) {
            return false;
        } else {
            return false;
        }
    }
    //Validation function for ADDRESS and PASSWORD characters
    function validInputs(index, num1, num2, num3, num4, num5){
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
        if (inputs[index].value.length >= num1 && num >= num2 && lett >= num3 && spa == num4 && symbols == num5){
            return true;
        }else {
            return false;
        }
    }
    //Validation function for Name
    function nameValidation() {
        var validationOk = validCharacters(0);
        if(validationOk){
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
        if(validationOk){
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
    //Validation function for ID
    function idValidation() {
        var validationOk = validNumbers(2, 8, 7);
        if(validationOk){
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
    // Validation function for Date of Birth
    function birthValidation() {
        var today = new Date();
        var birthDate = new Date(inputs[3].value);
        var age = today.getFullYear() - birthDate.getFullYear();
        if(age >= 18 && age <= 99){
            document.getElementById('em-birth-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-birth-div').classList.add('em-form-group-ok');
            document.querySelector('#em-birth-div .em-form-input-error').classList.remove('em-form-input-error-active');
            return true;
        }else{
            document.getElementById('em-birth-div').classList.add('em-form-group-wrong');
            document.getElementById('em-birth-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-birth-div .em-form-input-error').classList.add('em-form-input-error-active');
            return false;
        }
    }
    // Reset input field function for Birth of Date
    function bDateResetForm(e){
        document.getElementById('em-birth-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-birth-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-birth-div .em-form-input-error').classList.remove('em-form-input-error-active');
    }
    //Validation function for Phone
    function phoneValidation() {
        var validationOk = validNumbers(4, 11, 10);
        if(validationOk){
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
    //Validation function for address
    function addressValidation() {
        var validationOk = validInputs(5,5,1,3,1,0);
        if(validationOk){
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
    //Validation function for city
    function cityValidation() {
        var validationOk = validCharacters(6);
        if(validationOk){
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
    //Validation function for POSTAL CODE
    function pcValidation() {
        var validationOk = validNumbers(7, 5, 4);
        if(validationOk){
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
    function emailValidation(){
        if(mailRegex.test(inputs[8].value)){
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
    ///Validation function for Password
    function passwordValidation() {
        var passValidation = validInputs(9,7,1,1,0,0);
        if(passValidation){
            document.getElementById('em-password-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-password-div').classList.add('em-form-group-ok');
            document.querySelector('#em-password-div .em-form-input-error').classList.remove('em-form-input-error-active');
            return true
        } else{
            document.getElementById('em-password-div').classList.add('em-form-group-wrong');
            document.getElementById('em-password-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-password-div .em-form-input-error').classList.add('em-form-input-error-active');
            return false
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
        var passValidation = validInputs(9,7,1,1,0,0);
        var passValidation2 = validInputs(10,7,1,1,0,0);
        if(passValidation && passValidation2 && inputs[9].value === inputs[10].value && passValidation2 !== null){
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
        var date = inputs[3].value
        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var day = date.substring(8, 10);
        var validDobFormat = month + '/' + day + '/' + year;
        if (nameValidation() && surnameValidation() &&
        idValidation() && birthValidation() && phoneValidation() &&
        addressValidation() && cityValidation() && pcValidation() &&
        emailValidation() && passwordValidation() && passwordValidation2()){
            document.getElementById('em-exit-div').classList.remove('em-form-group-wrong');
            document.getElementById('em-exit-div').classList.add('em-form-group-ok');
            exitMessage.innerHTML = 'Name: ' + inputs[0].value + ' Surname: ' + inputs[1].value + ' ID: ' + inputs[2].value + ' Birth Date: ' + validDobFormat +
            ' Phone: ' + inputs[4].value + ' Address: ' + inputs[5].value + ' City: ' + inputs[6].value + ' Postal Code: ' + inputs[7].value + ' Email: ' + inputs[8].value +
            ' Password 1: ' + inputs[9].value;
            fetch ("https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + inputs[0].value + "&lastName=" +
            inputs[1].value + "&dni=" + inputs[2].value +"&dob=" + validDobFormat + "&phone=" + inputs[4].value +
            "&address=" + inputs[5].value + "&city=" + inputs[6].value + "&zip=" + inputs[7].value + "&email=" +
            inputs[8].value + "&password=" + inputs[9].value)
                .then(function(response){
                    return response.json();
                })
                .then(function(response){
                    alert(response.msg + ' ' + JSON.stringify(response)); 
                    response.data.dob =  year + "-" + month  + "-" + day ;
                    localStorage.setItem('Name',response.data.name);
                    localStorage.setItem('Surname',response.data.lastName);
                    localStorage.setItem('Id',response.data.dni);
                    localStorage.setItem('Date of birth',response.data.dob);
                    localStorage.setItem('Phone',response.data.phone);
                    localStorage.setItem('Address',response.data.address);
                    localStorage.setItem('City',response.data.city);
                    localStorage.setItem('Postal Code',response.data.zip);
                    localStorage.setItem('Email',response.data.email);
                    localStorage.setItem('Password',response.data.password);
                })
                .catch(function(error){
                    alert('The form was not sent: ' + JSON.stringify(error));
                })
        } else {
            document.getElementById('em-message-div').classList.add('em-form-group-wrong');
            document.getElementById('em-message-div').classList.remove('em-form-group-ok');
            document.querySelector('#em-message-div .em-form-input-error').classList.add('em-form-input-error-active');
            exitMessage.innerHTML = ' ';
        }
    }
    // Whole form reset function
    function formReset(){
        document.getElementById('em-message-div').classList.remove('em-form-group-wrong');
        document.getElementById('em-message-div').classList.remove('em-form-group-ok');
        document.querySelector('#em-message-div .em-form-input-error').classList.remove('em-form-input-error-active');
        exitMessage.innerHTML = ' ';
    }
    // Restore data from local storage to form.
    function restoreData () {
        if(localStorage.getItem('Name')){
            inputs[0].value = localStorage.getItem('Name');
            inputs[1].value = localStorage.getItem('Surname');
            inputs[2].value = localStorage.getItem('Id');
            inputs[3].value = localStorage.getItem('Date of birth');
            inputs[4].value = localStorage.getItem('Phone');
            inputs[5].value = localStorage.getItem('Address');
            inputs[6].value = localStorage.getItem('City');
            inputs[7].value = localStorage.getItem('Postal Code');
            inputs[8].value = localStorage.getItem('Email');
            inputs[9].value = localStorage.getItem('Password');
            inputs[10].value =localStorage.getItem('Password');
        }
    }
    restoreData();
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
    createBtn.addEventListener('click', formValidation);
    createBtn.addEventListener('blur', formReset);
}

