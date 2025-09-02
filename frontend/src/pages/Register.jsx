// src/pages/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Frontend validation
    if (!username || !email || !password || !confirmPassword) {
      setMessage("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters");
      return;
    }

    // Optional: enforce at least one number
    if (!/\d/.test(password) || !/[A-Za-z]/.test(password)) {
      setMessage("Password must include at least one letter and one number");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, confirm_password: confirmPassword }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setMessage("Registered successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setMessage(data.error || "Registration failed");
      }
    } catch (err) {
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-100">
      <h2 className="text-3xl font-bold mb-6 text-green-800">Register</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80 sm:w-96 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
        >
          Register
        </button>
        <p className="text-sm text-green-700">
          Already have an account?{" "}
          <Link to="/login" className="underline hover:text-green-900">
            Login
          </Link>
        </p>
      </form>

      {message && <p className="text-sm text-red-500 mt-2 text-center">{message}</p>}
    </div>
  );
}

export default Register;
