const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

// Parse JSON request bodies
app.use(express.json());

// Serve the front-end files
app.use(express.static(__dirname));

// Server-side login validation
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check for missing fields
    if (
        typeof email !== "string" ||
        typeof password !== "string" ||
        email.trim() === "" ||
        password.trim() === ""
    ) {
        return res.status(400).json({
            message: "Email and password are required."
        });
    }

    // Validate email format
    if (!email.includes("@")) {
        return res.status(400).json({
            message: "Invalid email address."
        });
    }

    // Validate password length
    if (password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters."
        });
    }

    // In a real application, credentials would be
    // checked against a database using securely hashed passwords.
    return res.status(200).json({
        message: "Login validation successful."
    });
});

app.listen(PORT, () => {
    console.log(`Login form running at http://localhost:${PORT}`);
});

