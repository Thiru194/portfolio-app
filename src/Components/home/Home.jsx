import React, { useEffect, useState } from 'react'
import "./home.css";
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials';
// import ScrollDown from './ScrollDown';

import { BrowserRouter as Router } from 'react-router-dom';

const roles = [
  "Aspiring Full Stack Developer",
  "MERN Stack Enthusiast",
  "Problem Solver",
  "React.js Developer",
];

const useTypewriter = (words, typingSpeed = 90, deletingSpeed = 45, pause = 1500) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timer;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((prev) => prev + 1);
    } else {
      timer = setTimeout(() => {
        setText(
          deleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        );
      }, deleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
};

const Home = () => {
  const typedRole = useTypewriter(roles);

  return (
    <Router>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home_img" />

          <h1 className="home_name">Thiruselvan S</h1>

          <span className="home_education">
            {typedRole}
            <span className="home_cursor">|</span>
          </span>

          <HeaderSocials />

          <a href='#contact'>
            <button type="submit" className="btn">
              Hire Me
            </button>
          </a>

          {/* <ScrollDown /> */}
        </div>
      </section>
    </Router>
  )
}

export default Home;
