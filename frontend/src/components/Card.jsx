import React from "react";

function Card({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-60">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

export default Card;
