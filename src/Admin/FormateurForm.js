// FormateurForm.jsx
/*import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_FORMATEUR } from "../graphql/queries";

const FormateurForm = ({ onFormateurAdded }) => {
  const [formateur, setFormateur] = useState({
    nom: "",
    prenom: "",
    email: "",
    specialite: "",
  });

  const [createFormateur] = useMutation(CREATE_FORMATEUR, {
    onCompleted: () => {
      onFormateurAdded();
      setFormateur({ nom: "", prenom: "", email: "", specialite: "" });
    },
    onError: (error) => {
      console.error("Erreur lors de l'ajout :", error.message);
    },
  });

  const handleChange = (e) => {
    setFormateur({ ...formateur, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFormateur({
        variables: {
          input: {
            nom: formateur.nom,
            prenom: formateur.prenom,
            email: formateur.email,
            specialite: formateur.specialite,
          },
        },
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-2">Ajouter un Formateur</h2>
      <input
        type="text"
        name="nom"
        placeholder="Nom"
        value={formateur.nom}
        onChange={handleChange}
        className="block mb-2 border p-2 w-full"
        required
      />
      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        value={formateur.prenom}
        onChange={handleChange}
        className="block mb-2 border p-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formateur.email}
        onChange={handleChange}
        className="block mb-2 border p-2 w-full"
        required
      />
      <input
        type="text"
        name="specialite"
        placeholder="Spécialité"
        value={formateur.specialite}
        onChange={handleChange}
        className="block mb-2 border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Ajouter
      </button>
    </form>
  );
};

export default FormateurForm;*/