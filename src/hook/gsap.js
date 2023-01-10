import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapMenuStagger = (arr, trig, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: Expo.easeIn,
        stagger: 0.09,
        scrollTrigger: {
          start: "top center",
          end: "bottom -10%",
          trigger: trig && trig.current,
          toggleActions: "play reverse play reverse",
        },
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
        // scale: 0,
      },
      {
        x: 0,
        // scale: 1,
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
        // scale: 0,
      },
      {
        y: 0,
        // scale: 1,
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

export const useGsapPhotoDropping = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.2,
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
        x: "100vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useGsapBottomToTop = (arr, trig, view = "20%", delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "40%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: trig.current,
          start: `top ${view}`,
          end: "bottom -10%",
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.5,
        delay: delay,
      }
    );
  }, []);
};
