import "../styles/background.css";

export default function Background({ children }) {
  return (
    <div className="page-container">
      <div className="background-layer">
        <div className="grid-overlay"></div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
