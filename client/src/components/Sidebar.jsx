import { useEffect, useState } from "react";
import { auth } from "../firebase";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar({ user, sidebarOpen, setSidebarOpen }) {
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    const tz =
      user?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);
  }, [user]);

  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
      {/* Hamburger Toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      {/* Profile Picture */}
      <img
        src={
          user?.picture
            ? user.picture
            : "https://ui-avatars.com/api/?name=User&background=444&color=fff&rounded=true&size=128"
        }
        alt="Profile"
        className="sidebar-profile"
      />

      {/* Username */}
      {sidebarOpen && (
        <h3 className="sidebar-username">{user?.username || user?.name}</h3>
      )}

      {/* Timezone */}
      {sidebarOpen && <p className="sidebar-timezone">🕓 {timezone}</p>}

      {/* Home Button  */}
      <Link to="/" style={{ width: "100%", textDecoration: "none" }}>
        <button className="sidebar-main-btn">
          {sidebarOpen ? "Home" : "🏠"}
        </button>
      </Link>

      <div className="sidebar-spacer"></div>

      {/* More Options (User Profile) */}
      <Link to="/profile" style={{ width: "100%", textDecoration: "none" }}>
        <button className="sidebar-main-btn">
          {sidebarOpen ? "More Options" : "⋯"}
        </button>
      </Link>

      {/* Logout Button */}
      <button className="sidebar-logout-btn" onClick={handleLogout}>
        {sidebarOpen ? "Logout" : "⏻"}
      </button>
    </div>
  );
}
