

const form = document.getElementById("registrationForm");

const studentName = document.getElementById("studentName");

const nameDisplay = document.getElementById("nameDisplay");

const age = document.getElementById("age");

const email = document.getElementById("email");

const registerButton = document.getElementById("registerButton");

const keyDisplay = document.getElementById("keyDisplay");

const errorMessage = document.getElementById("errorMessage");

const successMessage = document.getElementById("successMessage");



studentName.addEventListener("input", function () {

    nameDisplay.textContent =
        "Student Name: " + studentName.value;

});




registerButton.addEventListener("mouseover", function () {

    registerButton.style.backgroundColor = "#ff9800";

});




registerButton.addEventListener("mouseout", function () {

    registerButton.style.backgroundColor = "#00c853";

});




studentName.addEventListener("keydown", function (event) {

    keyDisplay.textContent =
        "Last key pressed: " + event.key;

});



form.addEventListener("submit", function (event) {

    
    event.preventDefault();

    
    errorMessage.style.display = "none";

    successMessage.textContent = "";


    
    const nameValue = studentName.value.trim();

    const ageValue = age.value.trim();

    const emailValue = email.value.trim();


   
    if (nameValue === "") {

        showError("Please enter your name.");

        return;
    }


    if (ageValue === "") {

        showError("Please enter your age.");

        return;
    }


    if (emailValue === "") {

        showError("Please enter your email.");

        return;
    }


    successMessage.textContent =
        "Registration Successful!";

});


function showError(message) {

    errorMessage.textContent = message;

    errorMessage.style.display = "block";

}