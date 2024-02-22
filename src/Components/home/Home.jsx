import React from 'react'
import "./home.css";
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

import { BrowserRouter as Router } from 'react-router-dom';


const Home = () => {
  
  return (
    <Router>
    <section className="home container" id="home">
     <div className="intro">
      <img src={Me} alt="" className="home_img" />
      <h1 className="home_name">Thiruselvan S</h1>
      <span className="home_education">I'm a Full Stack Developer</span>

      <HeaderSocials/>
   <a href='#contact'> <button type="submit"  className="btn">Hireme</button></a>
      <ScrollDown/>
     </div>
   
    </section>
    </Router>
    
  )
}

export default Home;