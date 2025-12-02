import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { auth } from "../firebase";
import styles from "../styles/userprofile.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function UserProfile({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [username, setUsername] = useState(user?.username || "");
  const [picture, setPicture] = useState(user?.picture || "");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(picture);
  }, [picture]);

  const handleUsernameUpdate = async () => {
    const token = await auth.currentUser.getIdToken();

    const res = await fetch(`${API_URL}/api/user/update-username`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    const data = await res.json();
    if (data.success) {
      window.location.reload();
    } else {
      alert(data.error || "Failed to update username.");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    const token = await auth.currentUser.getIdToken();

    const res = await fetch(`${API_URL}/api/user/update-picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      window.location.reload();
    } else {
      alert(data.error || "Failed to update picture.");
    }
  };

  return (
    <div className={styles.userprofileContainer}>
      <Sidebar
        user={user}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className={styles.userprofileContent}>
        <h1>User Profile</h1>

        {/* Profile Picture */}
        <div className={styles.userprofilePictureSection}>
          <img
            src={preview}
            alt="Profile Preview"
            className={styles.userprofilePicture}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className={styles.userprofileFileInput}
          />
        </div>

        {/* Username */}
        <div className={styles.userprofileField}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            className={styles.userprofileInput}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button
          className={styles.userprofileSaveBtn}
          onClick={handleUsernameUpdate}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
