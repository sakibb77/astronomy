import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapRocketLeftToRight } from "./hook/gsap";
import rocket from "./img/rockets_PNG.png";

const Navbar = () => {
  const rocketRef = useRef(null);

  useGsapRocketLeftToRight(rocketRef);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <h2>astronomy</h2>
        </div>
        <ul className="links">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/mission"}>mission</Link>
          </li>
          <li>
            <Link to={"/gallery"}>gallery</Link>
          </li>
        </ul>
      </div>
      <img src={rocket} alt="" ref={rocketRef} />
    </nav>
  );
};

export default Navbar;
