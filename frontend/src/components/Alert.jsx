import React from "react";

function Alert({ message, type }) {
  const bgColor = type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700";
  return (
    <div className={`p-3 rounded mb-4 ${bgColor}`}>
      {message}
    </div>
  );
}

export default Alert;
