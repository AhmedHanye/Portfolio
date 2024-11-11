"use client";
import { useTransitionContext } from "@/utils/transitionContext";
import UseGsap2 from "@/utils/useGsap2";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin();
const Template = ({ children }: { children: child }) => {
  const transitionRef = useRef(null);
  const { dir } = useTransitionContext();
  UseGsap2(
    () => {
      // * Transition first render
      if (dir === null) {
        gsap.fromTo(
          transitionRef.current,
          { opacity: 0, scale: 0.87, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.2 }
        );
      } else {
        // * Transition after first render
        gsap.fromTo(
          transitionRef.current,
          {
            opacity: 0,
            // * left or right based on the direction
            x: dir ? 40 : -40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.15,
          }
        );
      }
    },
    [], // ! Only run on mount
    () => {
      // * Reset the opacity to 1 if on phones
      gsap.to(transitionRef.current, { opacity: 1, duration: 0 });
    }
  );
  return (
    <main ref={transitionRef} className="h-screen fouc_hide">
      {children}
    </main>
  );
};

export default Template;
