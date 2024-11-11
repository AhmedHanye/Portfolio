import { useGSAP } from "@gsap/react";

const UseGsap2 = (
  callback: () => void,
  deps: React.DependencyList,
  callback2?: () => void | null
): void => {
  useGSAP(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      callback();
    } else if (callback2) {
      callback2();
    }
  }, deps as unknown[]);
};
export default UseGsap2;
