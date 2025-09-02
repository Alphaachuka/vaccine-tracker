// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* <Navbar /> removed to prevent double nav */}
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-4">About Us</h1>
        <p className="text-gray-700 mb-6">
          We provide reliable health services and information. Our goal is to ensure you stay informed and healthy.
        </p>
        <p className="text-gray-700">
          Our platform integrates vaccines and medicines management, user-friendly dashboards, and professional support to ensure your wellbeing.
        </p>
      </div>
    </div>
  );
}

export default About;
