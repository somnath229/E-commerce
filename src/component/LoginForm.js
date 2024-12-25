import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../style/Form.css";
import { useNavigate } from "react-router"; // For redirecting after login
import axios from "axios"; // For making API requests

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to different pages after login

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://authentication-api-kkii.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    // Assuming the API returns a token or user data
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      // console.log("true");
      localStorage.setItem("authToken", json.authToken); // Store token in localStorage
      localStorage.setItem("userEmail", email);
      navigate("/profile"); // Redirect to the profile page after successful login
    } else setError("Invalid credentials. Please try again.");
  };
  return (
    <Form
      className="formM"
      onSubmit={handleSubmit} // Handle form submission
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <h5>Email address</h5>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          <h5>Password</h5>
        </Form.Label>
        <Form.Control
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update state on input change
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Show Password '✅'"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)} // Toggle password visibility
        />
      </Form.Group>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
      <Button variant="primary" type="submit" className="mt-3 w-100">
        SignIn
      </Button>
      <p style={{ fontStyle: "italic" }}>
        Note: The server might respond slowly, so please be patient.
      </p>
    </Form>
  );
}
