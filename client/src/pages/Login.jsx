import GoogleLoginButton from "../components/GoogleLoginButton";
import Logo from "../components/Logo"
import "../styles/login.css";

export default function Login() {
  return (
    <div className="page-container">
      <div className="background-layer">
        <div className="grid-overlay"></div>
      </div>

      <div className="login-card">
        <header className="card-header">
          <Logo />
        </header>

        <section className="card-body">
          <p className="subtitle">Elevate Your Productivity</p>
          <p className="subtitle">Sign in to continue your journey</p>
          <div className="divider"></div>
          <GoogleLoginButton />
        </section>

        <footer className="card-footer">
          Secure login · Your data is protected
        </footer>
      </div>
    </div>
  );
}
