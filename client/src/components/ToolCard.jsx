import "../styles/toolcard.css";
import { Link } from "react-router-dom";

export default function ToolCard({ title, description, link }) {
  return (
    <div className="tool-card">
      <div>
        <h3 className="tool-card-title">{title}</h3>
        <p className="tool-card-description">{description}</p>
      </div>

      <Link to={link || "#"}>
        <button className="tool-card-btn">Go to Tool</button>
      </Link>
    </div>
  );
}
