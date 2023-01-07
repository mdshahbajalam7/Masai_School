import React from "react";
import "./section.css";

function Section() {
  return (
    <div className="sectiongrid">
      <div className="right">
        <div className="rightinnerdiv">
          <img
            style={{ marginTop: "20px", height: "40px", marginLeft: "-10px" }}
            src="https://www.masaischool.com/img/homepage/sunshine.png"
            alt=""
          />
          <span className="spandiv">6000+</span>
          <span className="spandiv1">Students Currently Enrolled</span>
        </div>
        <h5 className="spandiv3">
          94%
          <span className="spandiv4">Placement Rate*</span>
          <img
            className="images"
            src="https://www.masaischool.com/img/homepage/underline.svg"
            alt=""
          />
        </h5>
        <p
          style={{
            width: "95%",
            margin: "auto",
            color: "white",
            fontFamily: "500",
          }}
        >
          *for students who have graduated from Masai School and are Masai
          accredited
        </p>
        <div className="rightinnerdiv1">
          <div className="texdiv">
            <h1 className="h1">₹7.2 LPA Average Salary</h1>
          </div>
          <div className="texdiv1">
            <h1 className="h1">₹36 LPA Highest Salary</h1>
          </div>
        </div>
      </div>
      <div className="leftdiv">
        <img
          style={{ height: "350px" }}
          src="https://www.masaischool.com/img/homepage/media.png"
          alt=""
        />
        <h3>Masai In The News</h3>
      <div style={{marginTop:"30px"}}>
      <button className="btn6">KNOW MORE</button>
      </div>
      </div>
    </div>
  );
}

export default Section;
