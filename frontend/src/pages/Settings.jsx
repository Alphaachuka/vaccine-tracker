// src/pages/Settings.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Settings() {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    // TODO: Connect to backend to update settings
    alert("Settings updated!");
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Settings</h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="email"
            placeholder="New Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update Settings
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
