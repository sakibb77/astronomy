import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useGsapMenuStagger } from "./hook/gsap";

const Footer = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);

  const icon1 = useRef(null);
  const icon2 = useRef(null);
  const icon3 = useRef(null);
  const icon4 = useRef(null);

  const footerRef = useRef(null);
  const liArr = [li1, li2, li3, li4];
  const iconArr = [icon1, icon2, icon3, icon4];

  useGsapMenuStagger(liArr, footerRef, 0);
  useGsapMenuStagger(iconArr, footerRef, 0);

  return (
    <footer className="" ref={footerRef}>
      <div className="footer-wrapper wrapper">
        <div className="footer-logo">
          <div className="logo">
            <h2>astronomy</h2>
          </div>
        </div>
        <div className="footer-menu">
          <li ref={li1}>
            <Link to={"/"}>home</Link>
          </li>
          <li ref={li2}>
            <Link to={"/mission"}>mission</Link>
          </li>
          <li ref={li3}>
            <Link to={"/gallery"}>gallery</Link>
          </li>
          <li ref={li4}>
            <Link to={"/blog"}>blog</Link>
          </li>
        </div>
        <div className="footer-contact">
          <form action="">
            <input type="email" name="" id="" placeholder="enter your email" />
            <input type="submit" value="submit" />
          </form>
          <div className="contact-icon">
            <span ref={icon1}>
              <FaFacebookF />
            </span>
            <span ref={icon2}>
              <FaWhatsapp />
            </span>
            <span ref={icon3}>
              <FaTwitter />
            </span>
            <span ref={icon4}>
              <FaInstagram ref={icon4} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
