import { useNavigate } from "react-router-dom";
import "../styles/toolcard.css";

export default function ToolCard({ title, description, route }) {
  const navigate = useNavigate();
  return (
    <div className="tool-card">
      <div>
        <h3 className="tool-card-title">{title}</h3>
        <p className="tool-card-description">{description}</p>

        <button
          className="tool-card-btn btn ripple"
          onClick={() => navigate(route)}
        >
          Go to Tool
        </button>
      </div>
    </div>
  );
}
