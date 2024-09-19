import React from "react";
import Facebook from "./facebook.png";
import Instagram from "./instagram.png";
import Twitter from "./twitter.png";
import Youtube from "./youtube.png";
import "./Footer.css"

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-menu-container">
          <h3 className="footer-main-heading">Company</h3>
          <p className="footer-text">About Us</p>
          <p className="footer-text">Our Services</p>
          <p className="footer-text">Privacy Policy</p>
        </div>

        <div className="footer-menu-container">
          <h3 className="footer-main-heading">Get Help</h3>
          <p className="footer-text">FAQ</p>
          <p className="footer-text">Services</p>
        </div>

        <div className="footer-menu-container">
          <h3 className="footer-main-heading">Contact Us</h3>
          <img src={Facebook}  className="footer-contact-logo"/>
          <img src={Instagram} className="footer-contact-logo"/>
          <img src={Twitter} className="footer-contact-logo"/>
          <img src={Youtube} className="footer-contact-logo"/>
        </div>

        <div className="footer-menu-container">
          <h3 className="footer-main-heading">Address</h3>
          <p className="footer-text"> Shivaji Nagar,main road Pune.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
