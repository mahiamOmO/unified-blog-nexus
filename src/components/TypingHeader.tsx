
import React from "react";

const TypingHeader = ({ text }: { text: string }) => (
  <h1
    className="font-playfair text-5xl md:text-6xl font-bold tracking-tight py-6 text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 via-blue-600 via-purple-500 to-teal-400 bg-clip-text animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary"
    style={{
      width: "100%",
      maxWidth: "900px"
    }}
  >
    {text}
    <span className="animate-blink ml-1">&nbsp;</span>
  </h1>
);

export default TypingHeader;

