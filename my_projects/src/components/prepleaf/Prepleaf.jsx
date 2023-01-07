import React from "react";
import "./prepleaf.css";

function Prepleaf() {
  return (
    <div className="prepleaf">
      <div className="imgtextdiv">
        <img
          style={{ marginTop: "10px",marginLeft:"38%" }}
          src="https://www.masaischool.com/img/masai-prepleaf/masai-prepleaf-logo.svg"
          alt=""
        />
        <h1 style={{marginTop:"10px",fontSize:"30px"}}>Scholar programs by Prepleaf</h1>
        <p style={{ width: "95%", margin: "auto" }}>
          Masai acquired Prepleaf in 2021 to expand their placement preparation
          portal as a go-to no cost resource for college students. Since, the 2
          companies have offered a Data Analytics course with a Pay After
          Placement model. The Scholar Program comes as India’s first
          subscription based foundational learning course
        </p>
        <h6
          style={{
            color: "#6E71D1",
            marginTop: "10px",
            fontFamily: "600",
            fontSize: "15px",
          }}
        >
          for 1st, 2nd & pre-final year students.
        </h6>
        <button className="btn5">VIEW COURSES</button>
        <p style={{ color: "gray", fontSize: "20px" }}>
          You can avail scholarship upto 75%.
        </p>
      </div>
    </div>
  );
}

export default Prepleaf;
