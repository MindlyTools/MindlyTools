import Logo from "../components/Logo";
import HamburgerButton from "../components/HamburgerButton";
import "../styles/header.css";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="inner-container">
          <a href="/" className="logo">
            <Logo />
          </a>

          <HamburgerButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className=""
          />
        </div>
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
