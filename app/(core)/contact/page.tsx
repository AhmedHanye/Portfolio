import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Chat from "@/components/contact/chat";

import { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
export const metadata: Metadata = {
  title: "Ahmed Hanye: Contact",
  description: "Contact me for any inquiries or collaborations",
};

export default function Contact() {
  const contacts: Record<string, [string, JSX.Element]> = {
    Gmail: [
      "mailto:ahmedhanyehossny@gmail.com",
      <Mail key="mail" className="size-full" />,
    ],
    Linkedin: [
      "https://linkedin.com/in/ahmed-hanye-a66096253",
      <LinkedInLogoIcon key="linkedin" className="size-full" />,
    ],
    Phone: ["tel:+123456789", <Phone key="phone" className="size-full" />],
  };
  return (
    <section
      id="contact"
      className="px-10 max-md:px-5 pb-10 center gap-5 max-md:gap-0 max-lg:flex-col-reverse min-h-full pt-16"
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
        <div className="flex items-center mt-8 space-x-4">
          {Object.keys(contacts).map((key) => (
            <TooltipProvider key={key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={contacts[key][0]}
                    className="text-gray-700 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 cursor-pointer md:size-14 size-10"
                    target="_blank"
                    aria-label={key}
                  >
                    {contacts[key][1]}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
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
