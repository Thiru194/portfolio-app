import React from 'react'
import "./services.css";

const data = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    title: "Frontend Development",
    description:
      "Experienced in building responsive web applications using HTML5, CSS3, Bootstrap, JavaScript, and React.js.",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    title: "Backend Development",
    description:
      "Skilled in Node.js, Express.js, REST API integration, Axios, MongoDB, and Oracle database management.",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    title: "Problem Solving",
    description:
      "Solved 1300+ Skillrack problems, 250+ LeetCode problems, and 130+ CodeChef challenges focused on DSA and logical thinking.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section_title">Technical Skills</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              
              <img 
                src={image} 
                alt={title} 
                className="services_img"
              />

              <h3 className="services_title">
                {title}
              </h3>

              <p className="services_description">
                {description}
              </p>

            </div>
          );
        })}
      </div>
    </section>
  )
};

export default Services;