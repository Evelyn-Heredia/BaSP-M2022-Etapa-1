window.onload = function(){
	function validation(e){
        var regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        var validEmail = regEx.test(e);
        if (validEmail=true){
            alert('right email, poner cartel verde');
        } else{
            alert('Error: invalid Email.')
        }
    }
    var emailBtn = document.querySelector('form #eMail');
    emailBtn.addEventListener(blur, validation(emailBtn.value.target));
    
}