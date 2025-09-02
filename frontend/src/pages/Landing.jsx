import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-green-400 text-white text-center">
      <h1 className="text-5xl font-extrabold mb-6 animate-bounce">
        Welcome to Vaccine Tracker 💉
      </h1>
      <p className="text-lg mb-8 max-w-xl">
        Manage vaccine and medicine records with authentication and email verification.
      </p>
      <div className="flex gap-6">
        <Link
          to="/register"
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded-2xl shadow hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 bg-green-700 text-white font-semibold rounded-2xl shadow hover:bg-green-800 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Landing;
