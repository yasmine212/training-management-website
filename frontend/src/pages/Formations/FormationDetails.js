import React from 'react'
import { useParams } from 'react-router-dom'
import { online } from '../../components/CoursesData'

const FormationDetails = () => {
  const { id } = useParams()
  const formation = online.find(item => item.id === parseInt(id))

  if (!formation) return <h2>Formation introuvable.</h2>

  return (
    <div
      className="formation-details"
      style={{
        backgroundImage: `url(${formation.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '80px',
        color: '#fff',
        position: 'relative',
      }}
    >
      <div className="overlay"></div>

      <div className="formation-content">
        <h1>{formation.courseName}</h1>
        <p><strong>Formateur :</strong> {formation.formateur}</p>
        <p><strong>Durée :</strong> {formation.duration}</p>
        <p><strong>Description :</strong> {formation.description}</p>
      </div>
    </div>
  )
}

export default FormationDetails
