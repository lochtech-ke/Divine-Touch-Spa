"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    // Simulate login
    await new Promise(r => setTimeout(r, 1200));
    setIsLoading(false);
    setMessage({ type: "success", text: "Welcome back! Redirecting to your profile..." });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (regPassword !== regConfirm) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }
    setIsLoading(true);
    setMessage(null);
    // Simulate register
    await new Promise(r => setTimeout(r, 1200));
    setIsLoading(false);
    setMessage({ type: "success", text: "Account created! Welcome to Divine Touch Spa." });
  };

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className="container flex justify-between items-center">
          <Link href="/" className={styles.logo}>
            Divine Touch
            <span>Therapy Spa</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/services">Services</Link>
            <Link href="/book" className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1>Welcome Back</h1>
            <p>Your wellness journey continues here.</p>
          </div>

          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${tab === "login" ? styles.activeTab : ""}`}
              onClick={() => { setTab("login"); setMessage(null); }}
            >
              Sign In
            </button>
            <button
              className={`${styles.tab} ${tab === "register" ? styles.activeTab : ""}`}
              onClick={() => { setTab("register"); setMessage(null); }}
            >
              Create Account
            </button>
          </div>

          {message && (
            <div className={`${styles.message} ${styles[message.type]}`}>
              {message.text}
            </div>
          )}

          {tab === "login" ? (
            <form onSubmit={handleLogin} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="login-email">Email Address</label>
                <input
                  id="login-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                />
              </div>
              <div className={styles.forgotLink}>
                <a href="#">Forgot your password?</a>
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isLoading}>
                {isLoading ? <span className={styles.spinner} /> : "Sign In"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="reg-name">Full Name</label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={regName}
                  onChange={e => setRegName(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="reg-email">Email Address</label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={regEmail}
                  onChange={e => setRegEmail(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="reg-password">Password</label>
                <input
                  id="reg-password"
                  type="password"
                  required
                  placeholder="Min. 8 characters"
                  value={regPassword}
                  onChange={e => setRegPassword(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="reg-confirm">Confirm Password</label>
                <input
                  id="reg-confirm"
                  type="password"
                  required
                  placeholder="Repeat password"
                  value={regConfirm}
                  onChange={e => setRegConfirm(e.target.value)}
                />
              </div>
              <p className={styles.terms}>
                By creating an account, you agree to our{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isLoading}>
                {isLoading ? <span className={styles.spinner} /> : "Create Account"}
              </button>
            </form>
          )}

          <div className={styles.divider}>
            <span>or continue with</span>
          </div>

          <div className={styles.socialBtns}>
            <button className={styles.socialBtn} id="google-login">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className={styles.socialBtn} id="facebook-login">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>

        <div className={styles.decorBox}>
          <div className={styles.decorTitle}>Member Benefits</div>
          <ul className={styles.benefitList}>
            <li>🌸 Earn loyalty points on every booking</li>
            <li>💅 Exclusive member-only promotions</li>
            <li>🎁 Send & receive gift vouchers</li>
            <li>📅 Manage all your appointments in one place</li>
            <li>⭐ Access your full treatment history</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
