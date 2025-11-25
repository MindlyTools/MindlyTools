import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import "../styles/googlelogin.css";

export default function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();

      console.log("Google User:", result.user);
      console.log("Firebase Token:", token);

      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Google login failed");
    }
  };

  return (
    <button className="google-login-btn" onClick={handleGoogleLogin}>
      Continue with Google
    </button>
  );
}
