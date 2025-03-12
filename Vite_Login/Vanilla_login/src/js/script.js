const API_URL = window.location.hostname.includes("localhost") 
    ? "http://localhost:5000/users" // During development
    : "./public/db.json"; // After build (optional)

document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (registerBtn) registerBtn.addEventListener("click", (event) => {
        event.preventDefault();
        register();
    });

    if (loginBtn) loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
        login();
    });

    if (logoutBtn) logoutBtn.addEventListener("click", logout);

    if (window.location.pathname.includes("index.html")) {
        showUser();
    }
});

// Register user
async function register() {
    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!username || !email || !password) {
        alert("⚠️ All fields are required!");
        return;
    }

    const newUser = { username, email, password };

    try {
        // Make sure to use a POST request to add the new user to the json-server database
        const response = await fetch("http://localhost:5000/users", {
            method: "POST", // Using POST method to send data to server
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        if (response.ok) {
            alert("✅ Registration successful!");
            window.location.href = "login.html";
        } else {
            alert("❌ Error registering user.");
        }
    } catch (error) {
        console.error("Error registering user:", error);
    }
}

// Login user
async function login() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    try {
        const response = await fetch("http://localhost:5000/users");
        const data = await response.json();
        const users = data || [];

        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            alert(`🎉 Welcome back, ${user.username}!`);
            localStorage.setItem("user", JSON.stringify(user)); // Save user info in localStorage
            window.location.href = "index.html"; // Redirect to homepage
        } else {
            alert("❌ Invalid email or password");
        }
    } catch (error) {
        console.error("Error logging in:", error);
    }
}

// Show user on homepage
function showUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("⚠️ You are not logged in!");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        document.getElementById("username").innerText = user.username;
    }
}

// Logout user
function logout() {
    localStorage.removeItem("user"); // Remove user from localStorage
    alert("👋 Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login page
}
