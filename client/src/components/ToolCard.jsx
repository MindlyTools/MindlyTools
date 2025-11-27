import "../styles/toolcard.css";

export default function ToolCard({ title, description }) {
  return (
    <div className="tool-card">
      <div>
        <h3 className="tool-card-title">{title}</h3>
        <p className="tool-card-description">{description}</p>
      </div>

      <button className="tool-card-btn btn ripple">Go to Tool</button>
    </div>
  );
}
