import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import "./courses.css";
import Heading from "../../components/Heading";

const GET_FORMATIONS = gql`
  query GetFormations {
    findAllFormations {
      id
      cover
      hoverCover
      courseName
      duration
    }
  }
`;

const OnlineCourses = () => {
  const { loading, error, data } = useQuery(GET_FORMATIONS);

  if (loading) return <p>Chargement des formations...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <>
    
      <h1 className="nos-formations-header">Our Courses</h1>
      <section className="online formations-page">
        <div className="container">
          <Heading subtitle="" />
          <div className="content grid3">
            {data.findAllFormations.map((val) => (
              <div className="box small-card" key={val.id}>
                <Link to={`/formation/${val.id}`} className="link-no-style">
                  <div className="img">
                    <img src={val.cover} alt="cover" />
                    <img src={val.hoverCover} alt="hover cover" className="show" />
                  </div>
                  <h3>{val.courseName}</h3>
                  <p className="course-count">{val.duration}</p>
                </Link>
                <Link to="/subscribe" className="subscribe-btn">Subscribe</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
