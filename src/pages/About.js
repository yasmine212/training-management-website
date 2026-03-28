import React from "react";
import Heading from "../components/Heading";
import "./about.css";
import { homeAbout } from "../components/aboutData";

const About = () => {
  return (
    <>
     <section className='aboutHome'>
  <div className='header-container'>
    <Heading subtitle='POURQUOI NOUS CHOISIR ?' title='Avantages de l’apprentissage en ligne' />
  </div>
  <div className='container flexSB'>
    <div className='right row'>
      <div className='items'>
        {homeAbout.map((val) => (
          <div className='item flexSB' key={val.id}>
            <div className='img'>
              <img src={val.cover} alt={val.title} />
            </div>
            <div className='text'>
              <h2>{val.title}</h2>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default About;
