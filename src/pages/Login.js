import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userFound = existingUsers.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (userFound) {
      localStorage.setItem("user", credentials.email);
      alert("Connexion réussie");
      navigate("/etudiant/dashboard");
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-form">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Votre adresse email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      <p className="register-link">
        Pas encore de compte ?{" "}
        <span onClick={() => navigate("/register")} style={{ color: "#f9f760", cursor: "pointer" }}>
          Créez-en un ici
        </span>
      </p>
    </div>
  );
};

export default Login;
