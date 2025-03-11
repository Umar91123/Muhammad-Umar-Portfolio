import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="container contact"id="contact">
        <h1>Contacts</h1>
        <div className="contacts icons"
        data-aos="zoom-in"
        data-aos-duration="1000">
          <a href="https://www.instagram.com/" target="_blank" className="item">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="item">
            <CiFacebook className="icon" />
          </a>
          <a href="https://pk.linkedin.com/" target="_blank" className="item">
            <CiLinkedin className="icon" />
          </a>
          <a href="https://x.com/?lang=en" target="_blank" className="item">
            <FaSquareXTwitter className="icon" />
          </a>
          <a href="https://github.com/" target="_blank" className="item">
            <FaGithub className="icon" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/"
            target="_blank"
            className="item"
          >
            <BiLogoGmail className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
