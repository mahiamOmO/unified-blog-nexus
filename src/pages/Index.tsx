
import React from "react";
import BlogFeed from "@/components/BlogFeed";
import TypingHeader from "@/components/TypingHeader";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen w-full px-0 md:px-10 bg-background flex flex-col items-center">
      <Navbar />
      <div className="w-full flex flex-col items-center relative">
        {/* Soft gradient banner background */}
        <div
          className="absolute top-0 left-0 w-full h-48 md:h-56 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(236,72,153,0.12) 0%, rgba(132,204,22,0.09) 36%, rgba(34,211,238,0.10) 100%)",
          }}
        />
        <div className="relative z-10 w-full flex flex-col items-center">
          <TypingHeader text="Mahia Momo Writes" />
          {/* Illustration removed */}
        </div>
      </div>
      <div className="max-w-screen-xl w-full mx-auto">
        {/* Space for blog feed and stats */}
        <BlogFeed />
      </div>
      <footer className="w-full text-center mt-16 py-6 border-t border-border text-muted-foreground/75 text-xs">
        &copy; {new Date().getFullYear()} Mahia Momo Writes &mdash; All rights reserved.
      </footer>
    </div>
  );
};
export default Index;

