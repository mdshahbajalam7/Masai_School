import React from "react";
import skilldata from "./Skill2";
import "../Skill/company.css";
import Marquee from "react-fast-marquee";
function Company2() {
  return (
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
          {skilldata.map((skill, id) => (
            <div className="skill--box" key={id}>
              <img src={skill.Image} alt={skill} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Company2;
