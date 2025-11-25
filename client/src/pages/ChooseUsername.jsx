import { useState } from "react";
import { auth } from "../firebase";

export default function ChooseUsername({ onComplete }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const saveUsername = async () => {
    setError("");

    if (!username.trim()) {
      setError("Username cannot be empty");
      return;
    }

    const uid = auth.currentUser.uid;

    const res = await fetch("http://localhost:5000/api/auth/set-username", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid, username }),
    });

    const data = await res.json();

    if (data.error) {
      setError(data.error);
    } else {
      onComplete(); // tells App.jsx username is done
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f0f0f",
        color: "white",
      }}
    >
      <div
        style={{
          background: "#1a1a1a",
          padding: "40px",
          borderRadius: "12px",
          width: "400px",
          textAlign: "center",
          border: "1px solid #333",
        }}
      >
        <h2>Create a Username</h2>
        <p style={{ marginBottom: "20px", color: "#aaa" }}>
          Choose a unique username to complete your account
        </p>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #444",
            marginBottom: "10px",
          }}
        />

        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}

        <button
          onClick={saveUsername}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#333",
            borderRadius: "6px",
            border: "1px solid #555",
            color: "white",
            cursor: "pointer",
          }}
        >
          Save Username
        </button>
      </div>
    </div>
  );
}
