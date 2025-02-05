import { useState } from "react";
import "./LoginRegister.css";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isLogin) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log("Registered with", { name, email, password });
      alert("Registration Successful! Please log in.");
      setIsLogin(true); 
    } else {
      if (email === "test@example.com" && password === "password") {
        alert("Login Successful!");
      } else {
        alert("Invalid email or password.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Local Cricket Live SCORE</h2>
      <p style={{ color: "#8e8e8e", fontSize: "14px", marginBottom: "10px" }}>
        {isLogin ? "Log in to your account" : "Sign up for an account"}
      </p>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className="btn">
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <div className="or-divider">OR</div>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span 
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </p>
      </form>

      <div className="footer">
        By {isLogin ? "logging in" : "signing up"}, you agree to our Terms & Privacy Policy.
      </div>
    </div>
  );
}
