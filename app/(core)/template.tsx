"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Template = ({ children }: { children: child }) => {
  // * Animation for page transition
  useGSAP(() => {
    if (window.innerWidth > 768) {
      gsap.fromTo(
        "#transition",
        { opacity: 0, x: -50 },
        { x: 0, opacity: 1, duration: 0.4, delay: 0.1 }
      );
    } else {
      gsap.to("#transition", { opacity: 1, duration: 0 });
    }
  }, []);

  return (
    <main
      id="transition"
      className="h-[calc(100vh-5rem)] max-md:h-[calc(100vh-4.5rem)] fouc_hide"
    >
      {children}
    </main>
  );
};

export default Template;
