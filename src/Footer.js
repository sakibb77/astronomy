import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-wrapper wrapper">
        <div className="footer-logo">
          <div className="logo">
            <h2>astronomy</h2>
          </div>
        </div>
        <div className="footer-menu">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/mission"}>mission</Link>
          </li>
          <li>
            <Link to={"/gallery"}>gallery</Link>
          </li>
          <li>
            <Link to={"/blog"}>blog</Link>
          </li>
        </div>
        <div className="footer-contact">
          <form action="">
            <input type="email" name="" id="" placeholder="enter your email" />
            <input type="submit" value="submit" />
          </form>
          <div className="contact-icon">
            <FaFacebookF />
            <FaWhatsapp />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
