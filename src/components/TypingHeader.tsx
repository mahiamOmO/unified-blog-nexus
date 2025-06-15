
import React from "react";

const TypingHeader = ({ text }: { text: string }) => (
  <h1
    className="font-playfair text-5xl md:text-6xl font-bold tracking-tight py-6 text-primary animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary"
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
