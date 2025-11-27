import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ToolCard from "../components/ToolCard";

export default function Home({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar
        user={user}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <h1>MindlyTools</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
            maxWidth: "800px",
          }}
        >
          <ToolCard
            title="Todo List"
            description="Simple tool to manage tasks"
          />
          <ToolCard
            title="Shopping List"
            description="real-time synced shopping list"
            link="/shopping"
          />

          <ToolCard
            title="Habit Tracker"
            description="Track your daily habits"
            link="/habits"
          />

          <ToolCard title="Tool 4" description="Description" />
          <ToolCard title="Tool 5" description="Description" />
          <ToolCard title="Tool 6" description="Description" />
        </div>
      </div>
    </div>
  );
}
