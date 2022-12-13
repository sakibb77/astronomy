import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero__wrapper">
          <div className="hero-left">
            <h1>The 7 wonders of the solar system</h1>
            <p>
              Most of us can only name a few of the seven wonders of the world,
              but historians, archaeologists, and pub quizzers can
            </p>
            <button className="btn read-more">read more</button>
          </div>
          <div className="hero-right">
            <img src="https://i.gifer.com/b2M.gif" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
