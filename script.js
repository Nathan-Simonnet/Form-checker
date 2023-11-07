const inputs = document.querySelectorAll('input');
let actualPseudo, actualMail, actualPassword;
let isPseudoValid = false;
let isMailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;


const pseudoHandler = function () {
    actualPseudo = "";
    isPseudoValid = false;

    let matchPseudo = /^[a-zA-Z0-9-]{3,8}$/;

    const input = document.getElementById("pseudo-input");
    const span = document.getElementById("pseudo-span");

    if (input.value.length != 0) {
        if (input.value.match(matchPseudo)) {
            span.textContent = "Valid";
            span.style.color = "green";
            isPseudoValid = true;
            actualPseudo = input.value;
        } else {
            span.textContent = "3 letters minimum";
            span.style.color = "red";
        }
    } else {
        span.textContent = "";
    }
}

const mailHandler = function () {
    actualMail = "";
    isMailValid = false;

    let matchmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const input = document.getElementById("mail-input");
    const span = document.getElementById("mail-span");

    if (input.value.length != 0) {
        if (input.value.match(matchmail)) {
            span.textContent = "Valid";
            span.style.color = "green";
            isMailValid = true;
            actualMail = input.value;
        } else {
            span.textContent = "Invalid";
            span.style.color = "red";
        }
    } else {
        span.textContent = "";
    }
}

const passwordHandler = function () {

    isPasswordValid = false;
    let matchpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,20}$/;

    const input = document.getElementById("password-input");
    const span = document.getElementById("password-span");
    const progressBar = document.getElementById("password-bar");
    progressBar.className = '';
    if (input.value.length != 0) {
        if (input.value.length > 20) {
            progressBar.classList.add("red")
            span.textContent = "Too much";
            span.style.color = "red";
        }
        else if (input.value.match(matchpassword) && input.value.length > 12) {
            progressBar.classList.add("green")
            span.textContent = "Valid";
            span.style.color = "green";
            isPasswordValid = true;
            actualPassword = input.value;
        }
        else if (input.value.match(matchpassword)) {
            span.textContent = "Valid";
            span.style.color = "orange";
            progressBar.classList.add("blue");
            isPasswordValid = true;
            actualPassword = input.value;
        }
        else {
            span.textContent = "Invalid";
            span.style.color = "red";
            progressBar.classList.add("red")
        }
    } else {
        span.textContent = "";
    }

    confirmHandler();

}

const confirmHandler = function () {
    isConfirmValid = false;
    const input = document.getElementById("confirm-input");
    const span = document.getElementById("confirm-span");

    if (input.value != 0) {

        if (isPasswordValid == false) {
            span.textContent = "Entrez d'abord un mot de passe valide";
            span.style.color = "red";
        } else if (isPasswordValid && input.value == actualPassword) {
            span.textContent = "It's a match!";
            span.style.color = "green";
            isConfirmValid = true;
        } else {
            span.textContent = "Pas de correspondance";
            span.style.color = "red";
        }
    } else {
        span.textContent = "";
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

document.getElementById('cheat').addEventListener('click', () => {
    console.log("cheat activated")
    inputs.forEach((input) => {

        if (input.id == "pseudo-input") {
            input.value = "PPP";
            isPseudoValid = true;
            actualPseudo = input.value

        } else if (input.id == "mail-input") {
            input.value = "PPP-PPP@ppp.com";
            isMailValid = true;
            actualMail = input.value

        } else if (input.id == "password-input") {
            input.value = "Azerty-1234!pppp";
            isPasswordValid = true;
            actualPassword = input.value

        } else if (input.id == "confirm-input") {
            input.value = "Poiu-1056!pppp";
            isConfirmValid = true;
        }
    });
});

let indexEffort = 0;
document.querySelector('input[type="submit"]').addEventListener('click', (e) => {

    if (!isPseudoValid && !isMailValid && !isPasswordValid && !isConfirmValid && indexEffort == 0) {
        e.preventDefault()
        indexEffort++;
        return alert("Nan mais un effort quand même")
    }
    if (!isPseudoValid && !isMailValid && !isPasswordValid && !isConfirmValid && indexEffort == 1) {
        indexEffort++;
        e.preventDefault()
        return alert("Dernière chance...")
    }
    if (!isPseudoValid && !isMailValid && !isPasswordValid && !isConfirmValid && indexEffort == 2) {
        indexEffort++;
        e.preventDefault()
        return alert("Bou!... Bon aller, on se concentre")
    }



    if (isPseudoValid && isMailValid && isPasswordValid && isConfirmValid) {
        console.log("ouiii")
        let data = {
            pseudo: actualPseudo,
            mail: actualMail,
            password: actualPassword,
        }

        console.log(data);
        alert("Bienvenue " + data.pseudo)
        data = {};
        console.log(data)
        actualPseudo = "";
        actualMail = "";
        actualPassword = "";

        inputs.forEach((input) => {
            input.value = "";
        });

    } else {

        e.preventDefault()

        let pseudoMissing, mailMissing, passwordMissing, confirmMissing;
        isPseudoValid == false ? pseudoMissing = "le pseudo, " : pseudoMissing = "";
        isMailValid == false ? mailMissing = "l'email, " : mailMissing = "";
        isPasswordValid == false || isConfirmValid == false ? passwordMissing = "le mot de passe, " : passwordMissing = "";

        alert("Veillez à compléter correctement " + pseudoMissing + mailMissing + passwordMissing + "afin de valider le formulaire.")

    }
});


