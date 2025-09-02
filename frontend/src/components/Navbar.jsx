// src/components/Navbar.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link to="/">HealthApp</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/contact" className="hover:text-green-200">Contact</Link>
            {user ? (
              <>
                <Link to="/profile" className="hover:text-green-200">Profile</Link>
                <Link to="/settings" className="hover:text-green-200">Settings</Link>
                <button onClick={handleLogout} className="hover:text-green-200">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-green-200">Login</Link>
                <Link to="/register" className="hover:text-green-200">Register</Link>
              </>
            )}
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-500 text-white px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block hover:text-green-200" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block hover:text-green-200" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="block hover:text-green-200" onClick={toggleMenu}>Contact</Link>
          {user ? (
            <>
              <Link to="/profile" className="block hover:text-green-200" onClick={toggleMenu}>Profile</Link>
              <Link to="/settings" className="block hover:text-green-200" onClick={toggleMenu}>Settings</Link>
              <button onClick={handleLogout} className="block hover:text-green-200 w-full text-left">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block hover:text-green-200" onClick={toggleMenu}>Login</Link>
              <Link to="/register" className="block hover:text-green-200" onClick={toggleMenu}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
