const inputs = document.querySelectorAll('input');

const pseudoHandler = function () {

    let matchPseudo = /^[a-zA-Z0-9-]{3,8}$/;

    const input = document.getElementById("pseudo-input");
    const span = document.getElementById("pseudo-span");

    if (input.value.length != 0) {
        if (input.value.match(matchPseudo)) {
            span.textContent = "Valid";
            span.style.color = "green";
        } else {
            span.textContent = "3 letters minimum";
            span.style.color = "red";
        }
    } else {
        span.textContent = "";
    }
}

const mailHandler = function () {

    let matchmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const input = document.getElementById("mail-input");
    const span = document.getElementById("mail-span");

    if (input.value.length != 0) {
        if (input.value.match(matchmail)) {
            span.textContent = "Valid";
            span.style.color = "green";
        } else {
            span.textContent = "Invalid";
            span.style.color = "red";
        }
    } else {
        span.textContent = "";
    }
}

const passwordHandler = function () {

    let matchpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,20}$/;

    const input = document.getElementById("password-input");
    const span = document.getElementById("password-span");
    const progressBar = document.getElementById("password-bar");

    if (input.value.length != 0) {
        if (input.value.match(matchpassword)) {
            span.textContent = "Valid";
            span.style.color = "green";

            if (0 < input.value.length < 6) {
                progressBar.classList.remove("red");
                progressBar.classList.remove("green");
                progressBar.classList.add("blue");
            } else if (input.value.length > 6) {
                progressBar.classList.remove("blue");
                progressBar.classList.add("green");
            }
        } else {
            span.textContent = "Invalid";
            span.style.color = "red";
            progressBar.classList.remove("blue");
            progressBar.classList.add("red");
        }
    } else {
        span.textContent = "";
        progressBar.classList.remove("red");
    }
    console.log(progressBar)
}

const confirmHandler = function () {

}

const validationDispatcher = function (name, matchPattern, messageInvalid) {



    if (name == "password") {
        passwordHandler();
    }
}

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.id == "pseudo-input") {
            console.log("pseudo");
            pseudoHandler();
        } else if (input.id == "mail-input") {
            console.log("mail")
            mailHandler();
        } else if (input.id == "password-input") {
            console.log("pw");
            passwordHandler();
        } else if (input.id == "confirm-input") {
            console.log("confirm")
            confirmHandler();
        }
    });
});

