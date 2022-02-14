
document.getElementById('login-submit').addEventListener('click',function(){
    //get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get pass password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;
    if(userEmail == 'test2022@gmail.com' && userPassword == 'test445'){
        window.location.href = 'banking.html';
    };
});













