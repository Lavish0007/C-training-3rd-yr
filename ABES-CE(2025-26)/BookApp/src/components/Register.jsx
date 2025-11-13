import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Registration Successful (Demo)!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "60px auto",
    padding: "20px",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#4a90e2",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Register;
