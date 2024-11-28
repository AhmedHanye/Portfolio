import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { memo } from "react";
const ChatLottie = () => {
  return (
    <div id="chat-3d" className="size-[27rem] max-md:size-80">
      <DotLottieReact
        src="/assets/chat.lottie"
        className="size-full"
        loop
        autoplay
        aria-label="Chat animation displaying a 3D chat icon"
      />
    </div>
  );
};

export default memo(ChatLottie);
