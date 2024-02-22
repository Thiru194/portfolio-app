import React from 'react'
import "./services.css";
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"


const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "I have a little bit knowledge about UI and UX.Now I trying to develop the more knowledge about UI and UX ",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "I have interest in developing a web page using HTML(Hyper Text Markup Language),CSS(Cascading Style Sheet),Bootstrap and JS(JavaScript)",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "Photography is make me to relif all the stress and make me happy.At that time of taking photo my mind get some relaxtation ",
  },
];
const Services = () => {
  return <section className="services container section" id='services'>
  <h2 className="section_title">Knowledge</h2>
  <div className="services_container grid">
    {data.map(({id,image,title,description})=>{
      return(
        <div className="services_card" key={id}>
          <img src={image} alt="" className="services_img"/>
          <h3 className="services_title">{title}</h3>
          <p className="services_description">{description}</p>
        </div>
      );
    })}
  </div>
  </section>
     
  
};

export default Services