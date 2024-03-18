// About.jsx
import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
// import AboutBox from './AboutBox';

const About = () => {
  const handleDownload = () => {
    const fileName = '717821F258-Thiruselvan S.pdf';
    const fileUrl = `${process.env.PUBLIC_URL}/Res/${fileName}`;
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About me</h2>
      <div className="about_container grid">
        <img src={Image} alt="" className="about_img"/>
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">I am Thiruselvan, a web developer from Tamilnadu, India. I have knowledge of designing web pages using React.js, and I have an interest in web development.</p>
            <button onClick={handleDownload} className="btn">Download Profile</button>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Problem Solving</h3>
                <span className="skills_number">60%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage problem-solving"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Communication</h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage communication"></span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
