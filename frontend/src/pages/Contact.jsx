// src/pages/Contact.jsx
import React, { useState } from "react"; 

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // TODO: Send to backend API
    alert("Message sent!");
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* <Navbar /> removed to prevent double nav */}
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-2"
            rows="5"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
