import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ToolCard from "../components/ToolCard";
import Footer from "../components/Footer";
import "../styles/home.css";
import "../styles/globals.css";
import TiltedCard from "../components/TiltedCard";

export default function Home({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        {/* Main Content */}
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
            // imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            // altText="Kendrick Lamar - GNX Album Cover"
            // captionText="Kendrick Lamar - GNX"
            // containerHeight="300px"
            // containerWidth="300px"
            // imageHeight="300px"
            // imageWidth="300px"
            // rotateAmplitude={12}
            // scaleOnHover={1.2}
            // showMobileWarning={false}
            // showTooltip={true}
            // displayOverlayContent={true}
            // overlayContent={
            //   <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
            // }
            >
              <ToolCard
                title="Todo List"
                description="Simple tool to manage tasks"
              />
            </TiltedCard>
            <ToolCard title="Tool 2" description="Description" />
            <ToolCard title="Tool 3" description="Description" />
            <ToolCard title="Tool 4" description="Description" />
            <ToolCard title="Tool 5" description="Description" />
            <ToolCard title="Tool 6" description="Description" />
          </div>
        </div>
        <Sidebar
          user={user}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <Footer />
    </>
  );
}
