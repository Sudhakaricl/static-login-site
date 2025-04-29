// Signup
function signupSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (username && password) {
        // Store user data in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Sign up successful!");
        window.location.href = "/log-in/log-in.html"; // After signup, redirect to login page
    } else {
        alert("Please fill all fields!");
    }
}

// Login
function loginSubmit(event) {
    event.preventDefault();

    const enteredUsername = document.getElementById("login-username").value.trim();
    const enteredPassword = document.getElementById("login-password").value.trim();

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert("Login successful!");
        // You can redirect to home page or dashboard here
        window.location.href = "../home/home.html";
    } else {
        alert("Invalid credentials! Please sign up first or check your inputs.");
    }
}
