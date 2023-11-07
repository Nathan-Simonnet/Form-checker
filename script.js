const inputs = document.querySelectorAll('input');

let isPseudoValid = false;
let isMailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;

let actualPseudo = "";
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

let actualMail = "";
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

let actualPassword = "";
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
        } else if (isPasswordValid == true && input.value == actualPassword) {
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

        } else if (input.id == "mail-input") {
            input.value = "PPP-PPP@ppp.com";
            isMailValid = true;

        } else if (input.id == "password-input") {
            input.value = "Azerty-1234!pppp";
            isPasswordValid = true;

        } else if (input.id == "confirm-input") {
            input.value = "Poiu-1056!pppp";
            isConfirmValid = true;
        }
    });
});

document.querySelector('input[type="submit"]').addEventListener('click', (e) => {

    if (isPseudoValid == true && isMailValid == true && isPasswordValid == true && isConfirmValid == true) {
        console.log("ouiii")
        let data = {
            pseudo: actualPseudo,
            mail: actualMail,
            password: actualPassword,
        }

        console.log(data);
        data = {
            pseudo: "",
            mail: "",
            password: "",
        }
        actualPseudo = "";
        actualMail = "";
        actualPassword = "";

        inputs.forEach((input) => {
            input.value = "";
        });



    } else {
        alert("il semblerait qu'un élément soit manquant ou incomplet")
        e.preventDefault()
    }
});


// console.time("tempsExecution");

// // Votre fonction ou code à mesurer
// votreFonctionOuCode();

// // Arrête le compteur et affiche le temps écoulé dans la console
// console.timeEnd("tempsExecution");