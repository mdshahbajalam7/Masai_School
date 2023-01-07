import { Box } from "@chakra-ui/react";
import React from "react";
import "./youtube.css";

function Youtube() {
  return (
    <>
      <div className="youtube">
        <div className="youtubetext">
          <h1 className="h1tag">
            Masai & N.S.D.C. Announce Strategic Partnership.
          </h1>
          <p className="ptag">
            The partnership with National Skill Development Corporation has the
            potential to create equal employment opportunity for India’s youth,
            narrowing the gap between the demand and supply of skilled manpower
            for the private-sector job market. This collaboration will change
            the way skill-based education is delivered in India.
          </p>
        </div>
        <div className="youtubesection">
          {/* <Box
          as="iframe"
          alt="Youtube"
          src="https://youtu.be/6vOmBOvIyPE"
          allow="autoplay"
          sx={{
            aspectRatio: "16/10.7",
          }}
        /> */}
          <Box borderRadius={"10px"}>
            <iframe
              width="560"
              height="315"
              style={{ borderRadius: "10px" }}
              src="https://www.youtube.com/embed/6vOmBOvIyPE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Box>
        </div>
      </div>
      <button className="btn8">START LEARNING</button>
    </>
  );
}

export default Youtube;
