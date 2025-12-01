import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ToolCard from "../components/ToolCard";
import TiltedCard from "../components/TiltedCard";
import Background from "../components/Background";
import "../styles/home.css";

export default function Home({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Background>
        <Header />
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: 1,
              transition: "margin-left 0.3s ease",
            }}
          >
            <div className="mindly-heading">
              <span className="mindly">
                <strong>Mindly</strong>
              </span>
              <span className="tools">
                <strong>Tools</strong>
              </span>
            </div>

            <div className="tool-container">
              <TiltedCard
                displayOverlayContent={true}
                overlayContent={
                  <ToolCard
                    title="Todo List"
                    description="Simple tool to manage tasks"
                  />
                }
              />
              <TiltedCard
                displayOverlayContent={true}
                overlayContent={
                  <ToolCard
                    title="Calculator"
                    description="Simple calculator for performing accurate operations"
                    route="/calculator"
                  />
                }
              />
              <TiltedCard
                displayOverlayContent={true}
                overlayContent={
                  <ToolCard
                    title="Calendar"
                    description="A calendar for selecting and displaying dates"
                    route="/calendar"
                  />
                }
              />
              <TiltedCard
                displayOverlayContent={true}
                overlayContent={
                  <ToolCard title="Tool 4" description="Description" />
                }
              />
              <TiltedCard
                displayOverlayContent={true}
                overlayContent={
                  <ToolCard title="Tool 5" description="Description" />
                }
              />
              <TiltedCard
                displayOverlayContent={true}
                overlayContent={
                  <ToolCard title="Tool 6" description="Description" />
                }
              />
            </div>
          </div>
          <Sidebar
            user={user}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
        <Footer />
      </Background>
    </>
  );
}
