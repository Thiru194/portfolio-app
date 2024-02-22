import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <Link to="https://www.instagram.com/s_p_o_r_t_y_b_o_y/" className="home_social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link to="https://twitter.com/Thiru_1903" className="home_social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-x-twitter"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/thiruselvan-s-96839026a/" className="home_social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </Link>
      <Link to="https://www.facebook.com/" className="home_social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook"></i>
      </Link>
      <Link to="https://www.google.com/" className="home_social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-google"></i>
      </Link>
      <Link to="https://github.com/Thiru194" className="home_social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </Link>
    </div>
  );
};

export default HeaderSocials;
