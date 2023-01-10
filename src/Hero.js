import React, { useRef } from "react";
import {
  useGsapBottomToTop,
  useGsapHeroTitleUnvail,
  useGsapShutterUnvail2,
} from "./hook/gsap";

import spacewalk from "../src/img/spacewalk.png";

const Hero = () => {
  const heroShutter1Ref = useRef(null);
  const heroShutter2Ref = useRef(null);
  const heroRef = useRef(null);
  const rightImgRef = useRef(null);
  const heroDescripRef = useRef(null);
  const heroBtnRef = useRef(null);

  // const shutterArr = [heroShutter1Ref, heroShutter2Ref];

  useGsapHeroTitleUnvail(heroShutter1Ref, heroRef, 1);
  useGsapShutterUnvail2(heroShutter2Ref, heroRef, 1);
  useGsapBottomToTop([heroDescripRef, heroBtnRef], heroRef, "20%", 3);

  return (
    <section className="hero" ref={heroRef}>
      <div className="wrapper">
        <div className="hero__wrapper">
          <div className="hero-left">
            <h1 className="hero-h1-f" ref={heroShutter1Ref}>
              The 7 wonders of
              {/* <span className="hero-shutter1"></span> */}
            </h1>
            <h1 className="hero-h1-l" ref={heroShutter2Ref}>
              the solar system
              {/* <span className="hero-shutter2"></span> */}
            </h1>
            <p ref={heroDescripRef}>
              Most of us can only name a few of the seven wonders of the world,
              but historians, archaeologists, and pub quizzers can
            </p>
            <button className="btn hero-read-more" ref={heroBtnRef}>
              <span>read more &rarr;</span>
            </button>
          </div>
          <div className="hero-right">
            <img src={spacewalk} alt="" ref={rightImgRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
