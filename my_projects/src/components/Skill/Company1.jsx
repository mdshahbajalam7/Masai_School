import React from "react";
import "../Skill/company.css";
import Marquee from "react-fast-marquee";
import skilldata from "./skilldata";
import Skill2 from "./Skill2";
import Company2 from "./Company2";
console.log();
console.log("Skills", skilldata);
function Company1() {
  return (
    // <div>

    <div className="skills">
      <p>Skilling talent that delivers.</p>
      <div className="skillsHeader">
        <h2 style={{ marginTop: "20px" }}>Meet Our 2000+ Hiring Partners</h2>
      </div>
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
                <img className="imgtag" src={skill.Images} alt={skill} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <Company2/>
    </div>
    // </div>
  );
}

export default Company1;
