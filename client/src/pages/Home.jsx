import Layout from "../components/Layout";
import ToolCard from "../components/ToolCard";
import TiltedCard from "../components/TiltedCard";
import "../styles/home.css";

export default function Home({ user }) {
  return (
    <Layout user={user}>
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
              displayOverlayContent={true}
              overlayContent={
                <ToolCard
                  title="Todo List"
                  description="Simple tool to manage tasks"
                  route="/todolist"
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
                  title="Habit Tracker"
                  description="Track your daily habits"
                  route="/habits"
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
      </div>
    </Layout>
  );
}
