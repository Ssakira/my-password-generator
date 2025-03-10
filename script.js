const API_URL = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (registerBtn) registerBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent page refresh
        register();
    });

    if (loginBtn) loginBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent page refresh
        login();
    });

    if (logoutBtn) logoutBtn.addEventListener("click", logout);

    if (window.location.pathname.includes("index.html")) {
        showUser();
    }
});

// Register user
function register() {
    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!username || !email || !password) {
        alert("⚠️ All fields are required!");
        return;
    }

    fetch(API_URL)
        .then(response => response.json())
        .then(users => {
            if (users.some(user => user.email === email)) {
                alert("❌ User already exists!");
                return;
            }

            const newUser = { id: users.length + 1, username, email, password };

            fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            })
            .then(() => {
                if (confirm(`✅ Registration successful!\nWelcome, ${username}!\n\nClick "OK" to login.`)) {
                    window.location.href = "login.html";
                }
            });
        })
        .catch(error => console.error("Error registering user:", error));
}

// Login user
function login() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    fetch(API_URL)
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                alert(`🎉 Welcome back, ${user.username}!\nYou have successfully logged in.`);
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "index.html";
            } else {
                alert("❌ Invalid email or password");
            }
        })
        .catch(error => console.error("Error logging in:", error));
}

// Show logged-in user's name on home page
function showUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("⚠️ You are not logged in!");
        window.location.href = "login.html";
    } else {
        document.getElementById("username").innerText = user.username;
    }
}

// Logout user
function logout() {
    localStorage.removeItem("user");
    alert("👋 Logged out successfully!");
    window.location.href = "login.html";
}
