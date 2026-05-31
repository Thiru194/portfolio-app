import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {

  const handleDownload = () => {

    const link = document.createElement("a");

    link.href = process.env.PUBLIC_URL + "/Res/Thiruselvan_Resume1.pdf";

    link.download = "Thiruselvan_Resume1.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <section className="about container section" id='about'>

      <h2 className="section_title">
        About Me
      </h2>

      <div className="about_container grid">

        <img
          src={Image}
          alt=""
          className="about_img"
        />

        <div className="about_data">

          <div className="about_info">

            <p className="about_description">
              Enthusiastic IT graduate aiming to start my career in software development.
              Skilled in React.js, Node.js, Express.js, MongoDB, Java, and Full Stack
              Development with strong problem-solving and programming skills.
            </p>

            <button
              onClick={handleDownload}
              className="btn"
            >
              Download Resume
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;