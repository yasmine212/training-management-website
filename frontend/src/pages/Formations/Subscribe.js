import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./subscribe.css";
import { http, extractErrorMessage } from "../../services/http";

const Subscribe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    niveauEtude: "",
    dateNaissance: "",
    modeFormation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await http.post('/clients', formData);
      alert("Merci pour votre inscription !");
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      alert(extractErrorMessage(error));
    }
  };

  return (
    <div className="subscribe-form">
      <h2>Formulaire d'inscription</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Votre nom complet" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Votre adresse email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="telephone" placeholder="Votre téléphone" value={formData.telephone} onChange={handleChange} required />
        <input type="text" name="niveauEtude" placeholder="Niveau d'étude" value={formData.niveauEtude} onChange={handleChange} required />
        <input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} required />
        <input type="text" name="modeFormation" placeholder="Mode de formation (Présentiel, En ligne...)" value={formData.modeFormation} onChange={handleChange} required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Subscribe;
