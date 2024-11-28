"use client";
import dynamic from "next/dynamic";
const ChatLottie = dynamic(() => import("@/components/contact/chatLottie"));

const Chat = () => {
  return <ChatLottie />;
};

export default Chat;
