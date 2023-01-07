import React from "react";
import "./Footer.css";
// import { CiFacebook, CiTwitter, IconName } from "react-icons/ci";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineCopyright,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
function Footer() {
  return (
    <div className="container">
      <div className="footerflex">
        <h3>Connect with a growing community of learners</h3>
        <button className="btn1">JOIN OUR DISCORD</button>
      </div>
      <div style={{ marginTop: "20px", color: "gray",border:"1px solid" }} ></div>
      {/* <hr style={{ marginTop: "20px", color: "gray" }} /> */}

      <div className="masaiflex">
        <img
          src="https://www.masaischool.com/img/footer/masai-logo.svg"
          alt=""
        />
        <div style={{ color: "white", width: "30%" }}>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "gray",
            }}
          >
            Follow us -{" "}
            <a
              target="_blank"
              style={{ fontSize: "25px", color: "white" }}
              href="https://twitter.com/masaischool"
            >
              <AiFillTwitterSquare />
            </a>{" "}
            <a
              target="_blank"
              style={{ fontSize: "25px", color: "white" }}
              href="https://www.facebook.com/masaischool/"
            >
              <AiFillFacebook />
            </a>
            <a
              target="_blank"
              style={{ fontSize: "25px", color: "white" }}
              href="https://www.linkedin.com/company/masai-school/"
            >
              {" "}
              <AiOutlineLinkedin />
            </a>
            <a
              target="_blank"
              style={{ fontSize: "25px", color: "white" }}
              href="https://www.instagram.com/masaischool/"
            >
              <AiFillInstagram />
            </a>{" "}
            <a
              target="_blank"
              style={{ fontSize: "25px", color: "white" }}
              href="https://github.com/masai-school"
            >
              <AiFillGithub />
            </a>
            <a
              target="_blank"
              style={{ fontSize: "25px", color: "white" }}
              href="https://www.youtube.com/channel/UCENOACKQiqejXP-bb9sCnMg?view_as=subscriber"
            >
              {" "}
              <BsYoutube />
            </a>
          </span>
        </div>
      </div>
      <div style={{ width:"80%",margin:"auto",marginTop: "20px", color: "gray",border:"1px solid" }} ></div>
      <div className="textdiv">
        <div className="innerdiv">
          <div className="MasaiAlumni">
            <h4>Masai Alumni</h4>
            <h4>Our Team</h4>
            <h4>Careers</h4>
            <h4>Referral Program</h4>
            <h4>Masai Learn</h4>
          </div>
          <div>
            <h4>Hire From Us</h4>
            <h4>Our Investors</h4>
            <h4>Testimonials</h4>
            <h4>Blog</h4>
            <h4>Scholarship</h4>
          </div>
          <div>
            <h4>About Us</h4>
            <h4>FAQ</h4>
            <h4>Newsroom</h4>
            <h4>Contact Us</h4>
            <h4>Program’d by Masai</h4>
          </div>
        </div>
        <div className="grid">
          <h5 style={{width:"40%"}}>Get Started Join the Program</h5>
          <span><button className='btn2'>Get Started</button></span>
        </div>
      </div>
      <div style={{ width:"80%",margin:"auto",marginTop: "10px", color: "gray",border:"1px solid" }} ></div>
      <div className="lastfooter">
      <span style={{color:"gray"}} ><AiOutlineCopyright/> 2023 by Masai Schoo |  A Nolan Edutech Pvt Ltd Venture</span>
      <span><a style={{color:"gray"}} href="https://www.masaischool.com/privacy/">Privacy Policy</a> <span style={{color:"gray"}}>&</span>  <a style={{color:"gray"}} href="https://www.masaischool.com/terms/">Terms and Conditions</a></span>
      </div>
    
    </div>
  );
}

export default Footer;
