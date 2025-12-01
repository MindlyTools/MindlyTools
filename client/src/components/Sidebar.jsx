import { useEffect, useState } from "react";
import { auth } from "../firebase";
import "../styles/sidebar.css";

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

  const profile = async () => {
    window.location.href = "/profile";
  };

  const about = async () => {
    window.location.href = "/about";
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`sidebar-backdrop ${sidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}
        style={{ paddingTop: "90px" }}
      >
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

        {/* Main button */}
        {sidebarOpen && (
          <button className="sidebar-main-btn btn">Sidebar</button>
        )}

        {sidebarOpen && (
          <button className="sidebar-profile-btn" onClick={profile}>Profile</button>
        )}

        {sidebarOpen && (
          <button className="sidebar-about-btn" onClick={about}>About</button>
        )}

        <div className="sidebar-spacer"></div>

        {/* Logout Button */}
        <button className="sidebar-logout-btn" onClick={handleLogout}>
          {sidebarOpen ? (
            <>
              <span>⏻</span>
              Logout
            </>
          ) : (
            "⏻"
          )}
        </button>
      </div>
    </>
  );
}
