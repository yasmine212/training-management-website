import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/pp.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div id="heading">
          <h3 style={{ color: "#f7e700" }}>BIENVENUE SUR NOTRE PLATEFORME</h3>
          <h1>Formations en ligne pour booster votre avenir</h1>
        </div>
        <p>Explorez nos formations et développez vos compétences pour réussir votre carrière professionnelle.</p>
        <div className="button">
          <Link to="/login" className="btn-3"><span>DÉMARRER MAINTENANT</span></Link>
          <Link to="/formations" className="btn-3"><span>VOIR LES FORMATIONS</span></Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
