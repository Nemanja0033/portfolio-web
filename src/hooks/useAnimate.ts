import gsap from "gsap";
import { useEffect, RefObject } from "react";

export const useAnimation = (ref: RefObject<HTMLElement>, duration: number) => {
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      const animation = gsap.fromTo(element, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: duration }
      );
      
      return () => {
        animation.kill(); 
      };
    }
  }, [ref]);
};