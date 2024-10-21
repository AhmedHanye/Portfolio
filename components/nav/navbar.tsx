"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeToggle from "./themeToggle";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  // * Get the current page path
  const currentPage = usePathname();

  // * Animate the navbar
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#navbar", {
      opacity: 1,
    });
    if (window.innerWidth > 768) {
      tl.from("#theme-toggle", {
        x: -60,
        duration: 0.5,
        ease: "power4.out",
        delay: 0.1,
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
    }
  }, []);

  const links: string[][] = [
    ["Home", "/"],
    ["Projects", "/projects"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];
  return (
    <nav
      className="sticky flex top-5 my-5 gap-5 max-md:gap-3 h-10 max-md:h-8 w-fit z-[999999] mx-auto fouc_hide"
      id="navbar"
      aria-label="Main Navigation"
    >
      <div
        id="links"
        className="bg-foreground h-full px-4 z-[9999] dark:bg-white flex text-white dark:text-black font-bold rounded-3xl max-md:text-xs"
      >
        {links.map(([name, href]) => (
          <Link
            key={name}
            href={href}
            className="transition-colors1 group relative text-center content-center h-full w-24 max-md:w-16"
            prefetch={false}
          >
            <span
              className={
                currentPage === href
                  ? "text-gray-300 dark:text-gray-600 block animate-bounce"
                  : ""
              }
            >
              {name}
            </span>
            <span
              className={`w-3/4 h-[0.17rem] rounded-full dark:group-hover:bg-black absolute bottom-0 left-1/2 -translate-x-1/2 ${
                currentPage === href ? "bg-white dark:bg-black" : ""
              }`}
            ></span>
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
