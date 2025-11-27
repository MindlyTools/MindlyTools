import { useState } from "react";
import { auth } from "../firebase";

export default function ChooseUsername({ onComplete }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const saveUsername = async () => {
    setError("");
    setLoading(true);

    if (!username.trim()) {
      setError("Username cannot be empty");
      setLoading(false);
      return;
    }

    try {
      const token = await auth.currentUser.getIdToken();

      const res = await fetch("http://localhost:5000/api/auth/set-username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        onComplete();
      }
    } catch (err) {
      setError("Something went wrong, try again");
    }

    setLoading(false);
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
          onChange={(e) => setUsername(e.target.value.trim())}
          placeholder="Enter username"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #444",
            marginBottom: "10px",
            background: "#111",
            color: "white",
          }}
        />

        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}

        <button
          onClick={saveUsername}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: loading ? "#555" : "#333",
            borderRadius: "6px",
            border: "1px solid #555",
            color: "white",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Saving..." : "Save Username"}
        </button>
      </div>
    </div>
  );
}
