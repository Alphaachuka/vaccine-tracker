// src/pages/Profile.jsx
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {    
      // Fetch user profile from backend
      fetch(`http://127.0.0.1:5000/auth/profile/${user.id}`)
        .then((res) => res.json())
        .then((data) => setProfile(data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  if (!profile) return <p className="p-6">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Your Profile</h1>
        <p className="text-gray-700"><strong>Username:</strong> {profile.username}</p>
        <p className="text-gray-700"><strong>Email:</strong> {profile.email}</p>
        <p className="text-gray-700"><strong>Joined:</strong> {profile.joined}</p>
      </div>
    </div>
  );
}

export default Profile;
