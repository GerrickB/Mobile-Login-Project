function validateLogin(){
    event.preventDefault();
    const email = 'myemail@gmail.com';
    const password = 'password';
    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;
    if (email == enteredEmail && password == enteredPassword){
        sessionStorage.setItem('auth','yes');
        document.getElementById('welcomeMsg').innerHTML = 'Welcome, please click here to access your account <a href="account.html">Account</a>';
    }
    else {
        document.getElementById('welcomeMsg').innerHTML = 'Please try again';
    }
    return false;
}