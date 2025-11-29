import Logo from "../components/Logo"
import "../styles/header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="/" className="logo">
          <Logo />
        </a>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <a href="#contact" className="contact-button">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}