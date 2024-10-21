import React, { useState } from "react";
import './Contact.css'; // Import CSS for styling

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        
        // Here you would typically send this data to your backend or an API
        setError(""); // Clear error on successful submission
        alert("Message sent successfully!");
        
        // Clear the form fields after submission
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>If you have any questions, please reach out!</p>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" id="submit">Send Message</button>
            </form>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@healthclinic.com">info@healthclinic.com</a></p>
                <p><strong>Address:</strong> 123 Health St., Wellness City, ST 12345</p>
            </div>
        </div>
    );
}

export default Contact