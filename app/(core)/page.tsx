import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed Hanye: Home",
  description:
    "Welcome to the portfolio of Ahmed Hanye, a dedicated and passionate software engineer specializing in full stack development.",
};

export default function Home() {
  return (
    <section
      id="home"
      className="px-10 max-md:px-5 pb-10 center gap-5 max-lg:flex-col-reverse min-h-full"
    >
      <div id="content">
        <p className="md:text-xl font-semibold">Hi, I&apos;m</p>
        <h1 className="md:text-6xl text-4xl py-2 font-extrabold bg-gradient-to-r from-orange-800 via-orange-600 to-orange-400 text-transparent inline-block bg-clip-text">
          Ahmed Hanye
        </h1>
        <p className="md:text-xl font-semibold pt-7">
          I&apos;m a dedicated and passionate software engineer with a strong
          focus on full stack development. I specialize in building dynamic,
          high-performance web applications. I thrive on solving complex
          problems and creating seamless user experiences that deliver
          real-world impact. For me, programming is not just a career it&apos;s
          a craft that I love continuously honing and pushing to new heights.
        </p>
      </div>
      <div id="profile-image" className="md:min-w-fit">
        <Image
          id={"profile-image"}
          src="/assets/images/profileImage.webp"
          alt="Ahmed Hanye"
          width={400}
          height={400}
          className="rounded-full shadow-theme-light max-md:size-64"
          priority={true}
          sizes="(max-width: 768px) 256px, 400px"
        />
      </div>
    </section>
  );
}
