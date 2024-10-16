const email = document.getElementById('email');
const password = document.getElementById('password')
const submitBtn = document.getElementById('submit-btn');
const lockPassword = document.getElementById('lock-password');
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')
const submitError = document.getElementById('submit-error')

email.addEventListener('keyup', validateEmail);
password.addEventListener('keyup', () => validatePassword(password.value));




function validateEmail () {

    const emailValue = email.value.trim();

    if(emailValue.length == 9){
        emailError.innerHTML = '<p>fill in your email</p>'
        return false
    }

    if(!emailValue.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)){
          emailError.innerHTML = '<p>enter a valid email</p>'
          return false
    }

    emailError.innerHTML = '<p class="valid">valid email</p>'
    return true

};

function validatePassword(password) {

    const minLength = 8;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.length < minLength) {
        passwordError.innerHTML = "<p>Password must be at least 8 characters long.</p>";
        return false;
    }

    if (!regex.test(password)) {
        passwordError.innerHTML = "<p>Password must contain uppercase, lowercase, number, and special character.</p>";
        return false;
    }

    passwordError.innerHTML = "<p class='valid'>Password valid</p>";
    return true;
}


lockPassword.addEventListener('click', () => {
    if(password.type == "password"){
        password.type = "text"
        lockPassword.classList.remove("bxs-lock")
        lockPassword.classList.add("bxs-lock-open")
    }else{
        password.type = "password"
        lockPassword.classList.remove("bxs-lock-open")
        lockPassword.classList.add("bxs-lock")
    }
})


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword(password.value);

    if (!isEmailValid || !isPasswordValid) {
        submitError.style.display = "block";
        submitError.innerHTML = '<p>Fill all the blanks correctly</p>';

        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
});