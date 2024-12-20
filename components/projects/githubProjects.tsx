"use client";
import Loading from "@/app/(core)/loading";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  {
    ssr: false,
  }
);
const Repositories = dynamic(
  () => import("@/components/projects/repositories"),
  {
    ssr: false,
  }
);

const Desktop = dynamic(() => import("@/components/projects/desktop"), {
  ssr: false,
  loading: () => (
    <Loader
      containerStyles={{
        position: "unset",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
      barStyles={{
        backgroundColor: "var(--foreground)",
      }}
      dataStyles={{
        color: "var(--foreground)",
        fontWeight: "bolder",
      }}
      innerStyles={{
        outline: "1px solid var(--foreground)",
        backgroundColor: "var(--background)",
        scale: 2.25,
      }}
    />
  ),
});

const GithubProjects = () => {
  const [contentData, setContentData] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);
  const getContentData = async () => {
    try {
      const response = await fetch("/api/github");
      const data = await response.json();
      if (response.ok) setContentData(data);
      else setError("Server Error!");
    } catch {
      setError("Couldn't connect to server!");
    }
  };
  useEffect(() => {
    getContentData();
  }, []);

  return (
    <section id="github-repos" className="h-full">
      <Desktop
        content={
          error ? (
            <h1 className="text-red-600 font-extrabold text-lg">{error}</h1>
          ) : contentData ? (
            <Repositories contentData={contentData} />
          ) : (
            <Loading />
          )
        }
      />
    </section>
  );
};

export default GithubProjects;
