import React from "react";

function Medicines() {
  return (
    <div className="min-h-screen bg-teal-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-teal-700 mb-6">Medicines</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-teal-600">Paracetamol</h2>
            <p className="text-teal-700 mt-2">Manage stock and expiration dates.</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-teal-600">Ibuprofen</h2>
            <p className="text-teal-700 mt-2">Manage stock and expiration dates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medicines;
