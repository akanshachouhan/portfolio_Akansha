import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Aakanshaa Chouhan. I am a <b>React.js Developer</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://gist.github.com/akanshachouhan/" target="black">
          <BsGithub />
        </a>
          {/* <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a> */}
        <a href="https://www.instagram.com/aakankshaa___chouhan/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/akansha-chouhan-130b64166/" target="black">
          <BsLinkedin />
        </a> 
      </div>
    </div>
  );
};

export default Footer;
