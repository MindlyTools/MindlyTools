import "../styles/hamburgerbutton.css";

export default function HamburgerButton({ isOpen, onClick, className = "" }) {
  return (
    <button
      className={`hamburger-btn ${isOpen ? "open" : ""} ${className}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className="line"></span>
    </button>
  );
}
