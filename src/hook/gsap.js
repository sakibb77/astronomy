import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapMenuStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-150%",
      },
      {
        y: 0,
        duration: 1,
        delay: delay,
        ease: Expo.easeIn,
        stagger: 0.1,
      }
    );
  }, []);
};

export const useGsapHeroTitleUnvail = (item, trig, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100vw",
        scale: 0,
      },
      {
        x: 0,
        scale: 1,
        duration: 2.5,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          start: "top center",
          end: "bottom 10%",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapShutterUnvail2 = (item, trig, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: "-100vw",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 2.5,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          start: "top center",
          end: "bottom 10%",
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
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

export const useGsapShowMoon = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 4,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

export const useGsapPhotoDropping = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        display: "block",
      },
      {
        display: "grid",
        duration: 2,
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

export const useGsapTitleUnvail = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "30%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: trig.current,
          // start: "top 5%",
          // end: "bottom 5%",
          // toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapMissionCard = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "30%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: trig.current,
          start: "top 5%",
          end: "bottom 5%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
