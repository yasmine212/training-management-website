// DashboardFormations.jsx
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_FORMATIONS, CREATE_FORMATION, DELETE_FORMATION } from "../graphql/queries";
import "./DashboardFormations.css";

const DashboardFormations = () => {
  const { data, loading, error, refetch } = useQuery(GET_FORMATIONS);
  const [createFormation] = useMutation(CREATE_FORMATION);
  const [deleteFormation] = useMutation(DELETE_FORMATION);

  const [formData, setFormData] = useState({
    cover: "",
    hoverCover: "",
    backgroundImage: "",
    courseName: "",
    description: "",
    formateurNom: "",
    formateurPrenom: "",
    formateurEmail: "",
    formateurSpecialite: "",
    duration: "",
    price: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFormation({
        variables: {
          createFormationInput: {
            courseName: formData.courseName,
            description: formData.description,
            duration: formData.duration,
            price: parseFloat(formData.price),
            cover: formData.cover,
            hoverCover: formData.hoverCover,
            backgroundImage: formData.backgroundImage,
            formateurNom: formData.formateurNom,
            formateurPrenom: formData.formateurPrenom,
            formateurEmail: formData.formateurEmail,
            formateurSpecialite: formData.formateurSpecialite,
          },
        },
      });
      alert("Training course created successfully!");
      setFormData({
        cover: "",
        hoverCover: "",
        backgroundImage: "",
        courseName: "",
        description: "",
        formateurNom: "",
        formateurPrenom: "",
        formateurEmail: "",
        formateurSpecialite: "",
        duration: "",
        price: "",
      });
      refetch();
    } catch (error) {
      console.error("Error while creating:", error.message);
      alert("An error occurred while creating the course.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFormation({ variables: { id: parseInt(id) } });
      refetch();
    } catch (err) {
      console.error("Error while deleting:", err);
      setMessage(`Error while deleting: ${err.message}`);
    }
  };

  const handleUpdate = (id) => {
    alert(`Update feature for course ID ${id} coming soon!`);
  };

  if (loading) return <p>Loading training courses...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="dashboard-container">
      <h2>Create a New Course</h2>
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit} className="form-admin">
        <input
          type="text"
          name="cover"
          value={formData.cover}
          onChange={handleChange}
          placeholder="Cover Image URL"
          required
        />
        <input
          type="text"
          name="hoverCover"
          value={formData.hoverCover}
          onChange={handleChange}
          placeholder="Hover Cover Image URL"
          required
        />
        <input
          type="text"
          name="backgroundImage"
          value={formData.backgroundImage}
          onChange={handleChange}
          placeholder="Background Image URL"
          required
        />
        <input
          type="text"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          placeholder="Course Name"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Course Description"
          rows={4}
          required
        />
        <input
          type="text"
          name="formateurNom"
          value={formData.formateurNom}
          onChange={handleChange}
          placeholder="Trainer Last Name"
          required
        />
        <input
          type="text"
          name="formateurPrenom"
          value={formData.formateurPrenom}
          onChange={handleChange}
          placeholder="Trainer First Name"
          required
        />
        <input
          type="email"
          name="formateurEmail"
          value={formData.formateurEmail}
          onChange={handleChange}
          placeholder="Trainer Email"
          required
        />
        <input
          type="text"
          name="formateurSpecialite"
          value={formData.formateurSpecialite}
          onChange={handleChange}
          placeholder="Trainer Specialty"
          required
        />
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duration"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (€)"
          required
        />
        <button type="submit">Create Course</button>
      </form>

      <h3>Existing Courses</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Trainer</th>
            <th>Email</th>
            <th>Specialty</th>
            <th>Price (€)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.findAllFormations?.map((formation) => (
            <tr key={formation.id}>
              <td>{formation.id}</td>
              <td>{formation.courseName}</td>
              <td>{formation.formateurNom} {formation.formateurPrenom}</td>
              <td>{formation.formateurEmail}</td>
              <td>{formation.formateurSpecialite}</td>
              <td>{formation.price}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleUpdate(formation.id)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(formation.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardFormations;
