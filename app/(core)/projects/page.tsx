import GithubProjects from "@/components/projects/githubProjects";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ahmed Hanye: Projects",
  description:
    "A showcase of projects and works by Ahmed Hanye, demonstrating skills and expertise in various domains.",
};

export default function Projects() {
  return <GithubProjects />;
}
