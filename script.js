const passwordInput = document.querySelector("#password");
const confirmationInput = document.querySelector("#confirm_password");

const passwordMsg = document.querySelector("#password-msg");

function confirmPassword() {
    return passwordInput.value === confirmationInput.value;
}

function matchPasswordInputs() {
    confirmPassword() ? toggleValidState() : toggleInvalidState();
}

function toggleValidState() {
    passwordMsg.style.display = "none";
    passwordInput.style.border = "1px solid green";
    confirmationInput.style.border = "1px solid green";
}

function toggleInvalidState() {
    passwordMsg.style.display = "block";
    passwordInput.style.border = "1px solid red";
    confirmationInput.style.border = "1px solid red";
}

passwordInput.addEventListener("blur", matchPasswordInputs);
confirmationInput.addEventListener("blur", matchPasswordInputs);