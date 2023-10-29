const users = [];

        // Toggle between login and signup sections
        const login = document.getElementById("login-container");
        const signup = document.getElementById("signup-container");

        function toggleLoginSignup() {
            login.style.display = login.style.display === "none" ? "block" : "none";
            signup.style.display = signup.style.display === "none" ? "block" : "none";
        }

        // Login Form
        const loginForm = document.getElementById("login-form");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;
            // Check credentials against the database (simplified for example)
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                showMessage("Login successful");
            } else {
                showMessage("Login failed. Please check your username and password.");
            }
        });

        // Signup Form
        const signupForm = document.getElementById("signup-form");
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const fname = document.getElementById("fname").value;
            const lname = document.getElementById("lname").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const address = document.getElementById("address").value;
            const city = document.getElementById("city").value;
            const state = document.getElementById("state").value;
            // Add the new user to the database (simplified for example)
            users.push({ username: email, password: "password", fname, lname, phone, email,address,city,state });
            showMessage("Signup successful. You can now login.");
        });

        function showMessage(message) {
            const messageDiv = document.getElementById("message");
            messageDiv.innerText = message;
        }

