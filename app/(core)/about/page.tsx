import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import CVData from "@/components/about/cvData";
const CVDownload = dynamic(() => import("@/components/about/cvDownload"));

export const metadata: Metadata = {
  title: "Ahmed Hanye: About",
  description: "Learn more about me with my CV",
};

export default function About() {
  return (
    <section id="about" className="center flex-col px-5 pt-20">
      <div id="cv" className="w-full md:px-8 lg:px-16 pt-4">
        <div
          id="cv-header"
          className="md:px-4 md:gap-8 gap-2 flex items-center"
        >
          <Image
            id={"profile-image"}
            src="/assets/images/profileImage.webp"
            alt="Ahmed Hanye"
            width={160}
            height={160}
            className="rounded-full max-lg:size-32 max-md:size-24"
            priority={true}
          />
          <div id="cv-me" className="pb-2">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-extrabold">
              Ahmed Hanye
            </h1>
            <p className="lg:text-2xl md:text-xl text-sm font-semibold">
              Software Enginner
            </p>
          </div>
          <CVDownload />
        </div>
        <CVData />
      </div>
    </section>
  );
}
