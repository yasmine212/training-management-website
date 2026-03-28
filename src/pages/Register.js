import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find((user) => user.email === formData.email);

    if (userExists) {
      alert("Cet email est déjà utilisé !");
      return;
    }

    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Compte créé avec succès, vous pouvez maintenant vous connecter.");
    navigate("/login");
  };

  return (
    <div className="login-form">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Votre adresse email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Créer mon compte</button>
      </form>
    </div>
  );
};

export default Register;
