"use client";
import ThemeToggle from "./themeToggle";
import NavLinks from "./navLinks";
import UseGsap2 from "../../utils/useGsap2";
import gsap from "gsap";

const Navbar = () => {
  // * Animate the navbar
  UseGsap2(
    () => {
      const tl = gsap.timeline();
      tl.to("#navbar", {
        opacity: 1,
        duration: 0,
      });
      tl.from("#theme-toggle", {
        x: -60,
        duration: 0.5,
        ease: "power4.out",
        delay: 0.2,
      });
      tl.fromTo(
        "#links",
        {
          width: 40,
        },
        {
          width: "auto",
          duration: 0.2,
        }
      );
      tl.from("#links > *", {
        opacity: 0,
        y: 10,
        duration: 0.25,
        stagger: 0.08,
      });
    },
    [], // ! just run for the first render
    () => {
      // * Reset to opacity 1 for mobile
      gsap.to("#navbar", {
        opacity: 1,
        duration: 0,
      });
    }
  );

  return (
    <nav
      className="fixed left-0 right-0 flex md:top-10 top-5 gap-5 max-md:gap-3 h-10 max-md:h-8 w-fit mx-auto z-[999999] fouc_hide bg-transparent"
      id="navbar"
      aria-label="Main Navigation"
    >
      <NavLinks />
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
