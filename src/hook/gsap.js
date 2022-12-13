import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapPhotoDropping = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        // scale: 0,
      },
      {
        // scale: 1,
        duration: 1,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
        // stagger: 0.1,
        // delay: 2.5,
      }
    );
  }, []);
};

//rocket move

export const useGsapRocketLeftToRight = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100vw",
      },
      {
        x: "100vw",
        duration: 3,
      }
    );
  }, []);
};
