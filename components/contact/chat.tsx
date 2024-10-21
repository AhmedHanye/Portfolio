"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { memo } from "react";

const Chat = () => {
  return (
    <div id="chat-3d" className="size-[27rem] max-md:size-72">
      <DotLottieReact
        src="/assets/chat.lottie"
        className="size-full"
        loop
        autoplay
        role="img"
        aria-label="Chat animation displaying a 3D chat icon"
      />
    </div>
  );
};

export default memo(Chat);
