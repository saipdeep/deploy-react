import React, { useState } from "react";
import "./Login.css"
function LoginForm() {
    // Correctly initialize state for email
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle password input change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // Add your login logic here (e.g., API call)
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                  <div id="submit">
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;