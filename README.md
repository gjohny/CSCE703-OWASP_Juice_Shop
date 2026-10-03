# CSCE703-OWASP_Juice_Shop

# Secure Login Form

A basic login form inspired by the OWASP Juice Shop login page. This project demonstrates client-side and server-side validation using HTML, JavaScript, and Node.js with Express.

## Features

* Email and password input fields
* Prevents empty submissions
* Checks that the email contains `@`
* Requires passwords to be at least 8 characters
* Performs validation on both the client and server
* Uses `textContent` when displaying messages to reduce XSS risk
* Server-side validation prevents users from bypassing browser validation

## Project Structure

```text
secure-login-form/
├── index.html
├── script.js
├── server.js
├── package.json
└── README.md
```

## Requirements

* Node.js
* npm

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/gjohny/CSCE703-OWASP_Juice_Shop.git
```

2. Enter the project directory:

```bash
cd CSCE703-OWASP_Juice_Shop
```

3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open the following address in your browser:

```text
http://localhost:3001
```

## Security

The project uses both client-side and server-side validation. Client-side validation improves the user experience, but the server independently validates all submitted data because client-side checks can be bypassed.

The project also uses `textContent` instead of `innerHTML` when displaying server responses, reducing the risk of injecting HTML or JavaScript into the page.

This project is intended for educational purposes and does not implement production authentication or database-backed user accounts.

```
```
