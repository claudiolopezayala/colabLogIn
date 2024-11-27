import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "root") {
      navigate("/landing");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>UNCTU</h1>
      <p style={styles.subtitle}>
        Welcome to UNCT University, please enter your credentials below.
      </p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        LOGIN
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Ocupa toda la altura de la pantalla
    width: "100vw", // Ocupa todo el ancho de la pantalla
    backgroundColor: "rgb(38, 51, 93)",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  input: {
    width: "300px",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    width: "320px",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#EA4C89",
    color: "#ffffff",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
  },
};

export default LoginPage;
