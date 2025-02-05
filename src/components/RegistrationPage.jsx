import { useState } from "react";
import "./Registration.css"; 

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registering with", { name, email, password });
  };

  return (
    <div className="registration-container">
      <h2>Local Cricket Live SCORE</h2>
      <p style={{ color: "#8e8e8e", fontSize: "14px", marginBottom: "10px" }}>
        Sign up 
      </p>

      <form onSubmit={handleRegister}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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

        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="register-btn">
          Sign Up
        </button>

        <div className="or-divider">OR</div>

        <p className="login-link">
          Already have an account? <a href="#">Log in</a>
        </p>
      </form>

      <div className="footer">By signing up, you agree to our Terms & Privacy Policy.</div>
    </div>
  );
}
