const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

function validateLogin(email, password) {
    // Prevent empty submissions
    if (email.trim() === "" || password.trim() === "") {
        return "Email and password are required.";
    }

    // Check that the email contains "@"
    if (!email.includes("@")) {
        return "Please enter a valid email address.";
    }

    // Check minimum password length
    if (password.length < 8) {
        return "Password must be at least 8 characters.";
    }

    return null;
}

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Client-side validation
    const validationError = validateLogin(email, password);

    if (validationError) {
        message.textContent = validationError;
        return;
    }

    try {
        // Send login request to the server
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const result = await response.json();

        if (response.ok) {
            // Redirect to successful login page
            window.location.href = "/success.html";
        } else {
            // Display server-side validation error
            message.textContent = result.message;
        }

    } catch (error) {
        message.textContent = "Unable to connect to the server.";
    }
});
