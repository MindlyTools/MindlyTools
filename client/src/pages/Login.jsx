import GoogleLoginButton from "../components/GoogleLoginButton";

export default function Login() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        color: "white",
      }}
    >
      <div
        style={{
          padding: "40px",
          borderRadius: "12px",
          backgroundColor: "#2a2a2a",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>MindlyTools Login</h1>
        <p>Sign in to continue</p>

        <GoogleLoginButton />
      </div>
    </div>
  );
}
