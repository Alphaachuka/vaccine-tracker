// src/pages/VerifyEmail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VerifyEmail() {
  const { token } = useParams(); // get token from URL
  const navigate = useNavigate();
  const [status, setStatus] = useState("pending"); // "pending", "success", "error"
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) return;

      try {
        const res = await fetch(`http://127.0.0.1:5000/auth/verify-email/${token}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (res.ok) {
          setStatus("success");
          setMessage(data.message || "Email verified successfully!");
          // Auto redirect to login after 3 seconds
          setTimeout(() => navigate("/login"), 3000);
        } else {
          setStatus("error");
          setMessage(data.error || "Verification failed. Link may be invalid or expired.");
        }
      } catch (error) {
        setStatus("error");
        setMessage("Server error. Please try again later.");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  // Dynamic styling based on status
  const messageClass =
    status === "success"
      ? "text-green-700"
      : status === "error"
      ? "text-red-600"
      : "text-gray-700";

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-8 rounded shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Verify Email</h2>
        <p className={messageClass}>{message}</p>

        {status === "error" && (
          <button
            onClick={() => navigate("/register")}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Back to Register
          </button>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
