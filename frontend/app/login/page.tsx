"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "@/lib/authClient";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = "http://localhost:3001";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      // store token
      localStorage.setItem("token", data.token);

      // go to dashboard
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>🧠 Login</h1>
        <p style={{ opacity: 0.7 }}>Love Fills Memory SaaS</p>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          style={styles.button}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ marginTop: 10 }}>
          No account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
  },
  card: {
    width: 320,
    padding: 24,
    borderRadius: 12,
    background: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column" as const,
    gap: 10,
  },
  input: {
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ddd",
  },
  button: {
    padding: 10,
    borderRadius: 8,
    border: "none",
    background: "#111827",
    color: "white",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: 12,
  },
};