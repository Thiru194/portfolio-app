import React from 'react'
import "./resume.css";
import Data from './Data';
import Card from './Card';




const Resume = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section_title">Journey</h2>
      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, id)=>{
            console.log('Category:', val.category); 
            if(val.category === "education") {
               return (
                 <Card key={id}
                   icon={val.icon}
                   title={val.title}
                   year={val.year}
                   desc={val.desc}
                 />
               );
            }
            
            return null; 
          })}
        </div>

        <div className="timeline grid">
         {Data.map((val, index)=>{
            console.log('Category:', val.category); 
            if(val.category === "experience") {
               return (
                 <Card key={index}
                   icon={val.icon}
                   title={val.title}
                   year={val.year}
                   desc={val.desc}
                 />
               );
            }
            
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
export default Resume;