
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

          {/* Illustration */}
          <div className="w-full flex justify-center mb-6 mt-[-0.5rem]">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=cover&w=900&q=80"
              alt="Woman writing on laptop"
              className="rounded-3xl shadow-xl border border-border object-cover w-full md:w-4/5 lg:w-2/3 max-h-72 md:max-h-80 transition-all duration-500"
              loading="lazy"
              style={{ background: "#faf6fa", objectPosition: "center 40%" }}
            />
          </div>
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
