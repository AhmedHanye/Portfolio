import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import dynamic from "next/dynamic";
const Chat = dynamic(() => import("@/components/contact/chat"), {
  ssr: false,
});

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ahmed Hanye: Contact",
  description: "Contact me for any inquiries or collaborations",
};

export default function Contact() {
  const icons: Record<
    string,
    typeof faLinkedin | typeof faGithub | typeof faPhone
  > = {
    gmail: faEnvelope,
    linkedin: faLinkedin,
    phone: faPhone,
  };
  const contacts: Record<string, string> = {
    gmail: "mailto:ahmedhanyehossny@gmail.com",
    linkedin: "https://linkedin.com/in/ahmed-hanye-a66096253",
    phone: "tel:+123456789",
  };
  return (
    <section
      id="contact"
      className="px-10 max-md:px-5 pb-10 center gap-5 max-lg:flex-col-reverse min-h-full"
    >
      <div id="chat-content" className="">
        <h1 className="md:text-6xl text-4xl py-2 font-extrabold bg-gradient-to-r from-orange-800 via-orange-600 to-orange-400 text-transparent inline-block bg-clip-text">
          Let&apos;s Chat
        </h1>
        <p className="md:text-xl font-semibold pt-7">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out to me for any inquiries, questions, or just to say
          hi. I&apos;ll do my best to get back to you as soon as possible.
        </p>
        <div className="center mt-10 space-x-5">
          {Object.keys(icons).map((key) => (
            <TooltipProvider key={key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={contacts[key]}
                    className="text-gray-700 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 cursor-pointer"
                    target="_blank"
                    aria-label={key}
                  >
                    <FontAwesomeIcon className="size-10" icon={icons[key]} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="me-10">
                  <p>{key}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      <div className="w-fit">
        <Chat />
      </div>
    </section>
  );
}
