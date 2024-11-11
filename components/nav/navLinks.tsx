import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { TransitionContext } from "@/utils/transitionContext";
import gsap from "gsap";
import Link from "next/link";

const NavLinks = () => {
  // * Links for the navbar
  const links: LinksType = {
    "/": ["Home", 0],
    "/projects": ["Projects", 1],
    "/about": ["About", 2],
    "/contact": ["Contact", 3],
  };

  // * Manage routing with transitions
  const currentPage = usePathname();
  const router = useRouter();
  const { setDir } = useContext(TransitionContext);

  // * Handle exit transition
  const handleExitTransition = (href: string, dir: boolean) => {
    gsap.to("main", {
      opacity: 0,
      x: dir ? -40 : 40,
      duration: 0.15,
      onComplete: () => router.push(href),
    });
  };

  // * Handle routing
  const handleRouting = (href: string) => {
    if (!links[currentPage] || currentPage === href) return; // ! if the current page is the same as the clicked link
    if (window.innerWidth <= 768) {
      router.push(href); // ! if the link is not in the links object
    } else {
      const dir = links[href][1] > links[currentPage][1];
      // * Set the transition direction for the next page
      setDir(dir);
      // * Animate the exit transition
      handleExitTransition(href, dir);
    }
  };
  return (
    <div
      id="links"
      className="bg-foreground h-full px-4  dark:bg-white flex text-white dark:text-black font-bold rounded-3xl max-md:text-xs"
    >
      {Object.keys(links).map((href) => (
        <Link
          key={links[href][0]}
          href={href}
          className="transition-colors1 group relative text-center content-center h-full w-24 max-md:w-16"
          onClick={(e) => {
            e.preventDefault();
            handleRouting(href);
          }}
          onMouseEnter={() => router.prefetch(href)}
        >
          <span
            className={
              currentPage === href
                ? "text-gray-300 dark:text-gray-600 block animate-bounce"
                : ""
            }
          >
            {links[href][0]}
          </span>
          <span
            className={`w-3/4 h-[0.17rem] rounded-full dark:group-hover:bg-black absolute bottom-0 left-1/2 -translate-x-1/2 ${
              currentPage === href ? "bg-white dark:bg-black" : ""
            }`}
          ></span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
