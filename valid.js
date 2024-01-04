var email = document.form['form']['email'];
var password = document.form['form']['passwaord'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('password_error');

email.addEvenlistener('textInput', email_verify);
password.addEvenlistener('textInput', password_verify);

function validated(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
      }
      if (password.value.length < 5){
        password.style.border = "1px  solid red";
        password_error.style.display = "block";
        password.focus();
        return false;

      }
    
}
function email_verify(){
    if(email.style.length <= 9){
       email.style.border = "1px solid silver";
       email.error.style.display = "none";
        return true;
    }
function passwaord_verify(){
        if(password.style.length <= 5){
           password.style.border = "1px solid silver";
           password.error.style.display = "none";
            return true;
}