import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 100,
};

export default function Profile() {
  const [email, setEmail] = useState(null); // State to hold user email
  const navigate = useNavigate(); // Hook to navigate to different pages

  useEffect(() => {
    // Fetch the user email from localStorage
    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  const handleLogout = () => {
    // Remove user email from localStorage
    localStorage.removeItem("userEmail");

    // Redirect to the home page
    navigate("/");
  };

  if (!email) {
    return <p>No user data found. Please log in again.</p>;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Profile</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <h1>{user.name}</h1>
      <h5>Email: {email}</h5>
      <div
        style={{
          padding: "1rem",
          width: "50%",
          margin: "0 auto",
        }}>
        <button
          type="submit"
          className="mt-3 w-100"
          style={{
            background: "#6D4FC2",
            padding: "1rem",
            color: "#fff",
            border: "none",
            borderRadius: "1rem",
          }}
          onClick={handleLogout} // Add the logout handler
        >
          LogOut
        </button>
      </div>
    </div>
  );
}
