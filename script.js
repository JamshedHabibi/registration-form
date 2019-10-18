//Allowing the click of the arrow buttons to pass through a checking process.
document.getElementById('arrow1').addEventListener('click', emailForm);
document.getElementById('arrow2').addEventListener('click', usernameForm);
document.getElementById('arrow3').addEventListener('click', passwordForm);

//Checks whether email input is valid, providing a message response if not.
//If valid, passes form onto username input.
function emailForm() {
            const input = document.getElementById('email_input').value;
            const regex = /^\S+@\S+\.\S+$/;
            if (input == '') {
                document.getElementById('errorMessage').innerHTML = 'Please enter an email';
                error('rgb(255, 76, 76)');
            } else if (!input.match(regex)) {
                document.getElementById('errorMessage').innerHTML = 'Please enter a valid email';
                error('rgb(255, 76, 76)');
            } else {
                document.getElementById('errorMessage').innerHTML = '';
                error('rgb(53, 255, 80)');
                emailToUsername();
                progress1();
            }
};

//Ensures username input is between 6 and 21 characters.
function usernameForm() {
    const input = document.getElementById('username_input').value;
    if (input == '') {
        document.getElementById('errorMessage').innerHTML = 'Please enter a username';
        error('rgb(255, 76, 76)');
    } else if (input.length < 6 || input.length >= 20) {
        document.getElementById('errorMessage').innerHTML = 'Please enter a username between 6 and 20 characters';
        error('rgb(255, 76, 76)');
    } else {
        document.getElementById('errorMessage').innerHTML = '';
        error('rgb(145, 255, 111)');
        usernameToPassword();
        progress2();
    }
};

//Ensures password input contains at least 1 number and 1 special character.
function passwordForm() {
    const input = document.getElementById('password_input').value;
    const regex1 = /(\d){1,}/
    const regex2 = /[!@#$%^&*(),.?":{}|<>]{1,}/
    if (input == '') {
        document.getElementById('errorMessage').innerHTML = 'Please enter a password';
        error('rgb(255, 76, 76)');
    } else if (input.length < 6 || input.length >= 20 || !input.match(regex1) || !input.match(regex2)) {
        document.getElementById('errorMessage').innerHTML = 'Please enter a password between 6 and 20 characters, containing at least 1 number and 1 special character';
        error('rgb(255, 76, 76)');
    } else {
        document.getElementById('errorMessage').innerHTML = '';
        error('rgb(145, 255, 111)');
        passwordToSubmission();
        progress3();
    }
};

//Following 3 functions achieve the same thing.
//Passes form onto next input by making current input innactive and next input active.
//Active - opacity: 1. Innactive - opacity: 0 (CSS).
emailToUsername = () => {
const parent = document.getElementById('arrow1').parentElement;
const nextElement = parent.nextElementSibling;
parent.classList.add('innactive');
parent.classList.remove('active');
nextElement.classList.add('active');
nextElement.classList.remove('innactive');
}
usernameToPassword = () => {
    const parent = document.getElementById('arrow2').parentElement;
    const nextElement = parent.nextElementSibling;
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextElement.classList.add('active');
    nextElement.classList.remove('innactive');
}
passwordToSubmission = () => {
    const parent = document.getElementById('arrow3').parentElement;
    const nextElement = parent.nextElementSibling;
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextElement.classList.add('active');
    nextElement.classList.remove('innactive');
}

//Increases progress bar to 33% if email input is valid.
progress1 = () => {
const progressBar = document.getElementsByClassName('progressbar')[0];
const progressBarCS = window.getComputedStyle(progressBar);
setInterval(() => {
    const width=parseFloat(progressBarCS.getPropertyValue('--width'));
    if (width < 33) {
    progressBar.style.setProperty('--width', width + 0.1);
    document.getElementById('percentage').innerHTML = Math.ceil(width) + "%";
    };
}, 5);
};

//Increases progress bar to 66% if username input is valid.
progress2 = () => {
    const progressBar = document.getElementsByClassName('progressbar')[0];
    const progressBarCS = window.getComputedStyle(progressBar);
    setInterval(() => {
        const width=parseFloat(progressBarCS.getPropertyValue('--width'));
        if (width < 66) {
        progressBar.style.setProperty('--width', width + 0.1);
        document.getElementById('percentage').innerHTML = Math.ceil(width) + "%";
        };
    }, 5);
    };
//Increases progress bar to 100% if password input is valid.
progress3 = () => {
    const progressBar = document.getElementsByClassName('progressbar')[0];
    const progressBarCS = window.getComputedStyle(progressBar);
    setInterval(() => {
    const width=parseFloat(progressBarCS.getPropertyValue('--width'));
    if (width <=100) {
    progressBar.style.setProperty('--width', width + 0.1);
    document.getElementById('percentage').innerHTML = Math.ceil(width) + "%";
    };
}, 5);
};

//Provides a red flash if input is invalid.
//Provides a green flash if input is valid.
error = (color) => {
    const originalBackgroundColor = document.body.style.background;
    document.body.style.backgroundColor = color;
    setTimeout(() => {
        document.body.style.backgroundColor = originalBackgroundColor;
    }, 300);
};
