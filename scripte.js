const authForm = document.getElementById("authForm");
const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signUpBtn = document.getElementById("SignUpBtn");
const loginBtn = document.getElementById("LoginBtn");

// Form submission logic
authForm.onsubmit = function (event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (title.innerHTML === "Sign Up" && !name) {
        alert("Please enter your full name for sign up.");
        nameInput.focus();
        return;
    }

    if (title.innerHTML === "Login") {
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }
        console.log(`Logging in with Email: ${email}, Password: ${password}`);
        alert("Login successful!");
    } else {
        console.log(`Signing up with Name: ${name}, Email: ${email}, Password: ${password}`);
        alert("Sign up successful!");
    }
};

// Toggle between Sign Up and Login
loginBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUpBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
};

signUpBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signUpBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
};

// Prevent moving to other fields without filling the name in Sign Up
emailInput.addEventListener("focus", function () {
    if (title.innerHTML === "Sign Up" && !nameInput.value.trim()) {
        alert("Please enter your full name before proceeding to email.");
        nameInput.focus();
    }
});

passwordInput.addEventListener("focus", function () {
    if (title.innerHTML === "Sign Up" && !nameInput.value.trim()) {
        alert("Please enter your full name before proceeding to password.");
        nameInput.focus();
    }

    if (title.innerHTML === "Login" && (!emailInput.value.trim() || !passwordInput.value.trim())) {
        alert("Please enter both email and password.");
        passwordInput.focus();
    }
});

// Prevent moving to email field in Login mode without filling both email and password
emailInput.addEventListener("focus", function () {
    if (title.innerHTML === "Login" && (!emailInput.value.trim() || !passwordInput.value.trim())) {
        alert("Please enter both email and password.");
        emailInput.focus();
    }
});
