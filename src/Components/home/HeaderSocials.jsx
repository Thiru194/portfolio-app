import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSocials = () => {
  return (
    <div className="home_socials">

      <Link
        to="https://www.linkedin.com/in/thiruselvan-s"
        className="home_social-link linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </Link>

      <Link
        to="https://github.com/Thiru194"
        className="home_social-link github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </Link>

      <Link
        to="mailto:thiruselvan0319@gmail.com"
        className="home_social-link gmail"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
      </Link>

      <Link
        to="tel:+918838974963"
        className="home_social-link phone"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-phone"></i>
      </Link>
<Link
  to="https://leetcode.com/u/Thiruselvan_S/"
  className="home_social-link leetcode"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg"
    alt="leetcode"
    className="leetcode_icon"
  />
</Link>

    </div>
  );
};

export default HeaderSocials;