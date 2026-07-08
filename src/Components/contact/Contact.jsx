import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>

      <h2 className="section_title">My Details</h2>

      <div className="contact_container">

        {/* Top Cards */}
        <div className="contact_content">

          <div className="contact_card">
            <i className="fa-solid fa-user contact_card-icon"></i>

            <h3 className="contact_card-title">
              Full Name
            </h3>

            <span className="contact_card-data">
              Thiruselvan S
            </span>
          </div>

          <div className="contact_card">
            <i className="fa-solid fa-envelope contact_card-icon"></i>

            <h3 className="contact_card-title">
              Email Address
            </h3>

            <a
              href="mailto:thiruselvan0319@gmail.com"
              className="contact_card-data"
            >
              thiruselvan0319@gmail.com
            </a>
          </div>

          <div className="contact_card">
            <i className="fa-solid fa-phone contact_card-icon"></i>

            <h3 className="contact_card-title">
              Mobile Number
            </h3>

            <a
              href="tel:+918838974963"
              className="contact_card-data"
            >
              +91 8838974963
            </a>
          </div>

        </div>

        {/* Bottom Center Cards */}
        <div className="contact_socials">

          <div className="contact_card social_card">
            <i className="fa-brands fa-linkedin contact_card-icon"></i>

            <h3 className="contact_card-title">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/thiruselvan-s/"
              target="_blank"
              rel="noreferrer"
              className="contact_card-data"
            >
              linkedin.com/in/thiruselvan
            </a>
          </div>

          <div className="contact_card social_card">
            <i className="fa-brands fa-github contact_card-icon"></i>

            <h3 className="contact_card-title">
              GitHub
            </h3>

            <a
              href="https://github.com/Thiru194"
              target="_blank"
              rel="noreferrer"
              className="contact_card-data"
            >
              github.com/Thiru194
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;