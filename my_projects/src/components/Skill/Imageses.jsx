import React from 'react'
import "../Skill/company.css";
import Marquee from "react-fast-marquee";
import imagedata from '../Skill/image'

function Imageses() {
  return (
  <div style={{paddingTop:" 150px"}}>
    <div className="skillsContainer">
    <div className="skill--scroll">
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {imagedata.map((skill, id) => (
          <div key={id}>
            <img src={skill.imagedata} alt={skill} />
          </div>
        ))}
      </Marquee>
    </div>
  </div>
  </div>
  )
}

export default Imageses