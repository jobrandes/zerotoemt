import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Auth() {
  const [mode, setMode] = useState("login"); // login | signup
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { first_name: firstName.trim() } }
        });
        if (error) throw error;
        setMessage("Check your email to confirm your account, then log in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const canSubmit = mode === "signup"
    ? email && password && firstName.trim()
    : email && password;

  return (
    <div className="zte-auth-wrap">
      <div className="zte-auth-card">
        <div className="zte-logo" style={{fontSize: 24, marginBottom: 8}}>ZERO <span>TO</span> EMT</div>
        <div className="zte-tagline-mono" style={{marginBottom: 24}}>Free EMT Pre-Class Training</div>

        <h2 className="zte-auth-title">{mode === "login" ? "Welcome back" : "Create your account"}</h2>
        <p className="zte-auth-sub">Your progress saves automatically across all your devices.</p>

        <div className="zte-auth-fields">
          {mode === "signup" && (
            <input
              className="zte-tutor-input"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              autoFocus
            />
          )}
          <input
            className="zte-tutor-input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
          />
          <input
            className="zte-tutor-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
          />
        </div>

        {error && <div className="zte-auth-error">{error}</div>}
        {message && <div className="zte-auth-message">{message}</div>}

        <button className="zte-btn-primary" style={{width: "100%", justifyContent: "center", marginTop: 8}}
          onClick={handleSubmit} disabled={loading || !canSubmit}>
          {loading ? "..." : mode === "login" ? "Log In" : "Create Account"}
        </button>

        <div className="zte-auth-switch">
          {mode === "login" ? (
            <>Don't have an account? <button onClick={() => { setMode("signup"); setError(""); setMessage(""); setFirstName(""); }}>Sign up free</button></>
          ) : (
            <>Already have an account? <button onClick={() => { setMode("login"); setError(""); setMessage(""); }}>Log in</button></>
          )}
        </div>

        <div className="zte-auth-disclaimer">Free forever. No credit card. No spam.</div>
      </div>
    </div>
  );
}
