
import React from "react";
import BlogFeed from "@/components/BlogFeed";
import TypingHeader from "@/components/TypingHeader";

const Index = () => {
  return (
    <div className="min-h-screen w-full px-0 md:px-10 bg-background flex flex-col items-center">
      <TypingHeader text="Unified Blog Showcase" />
      <div className="max-w-screen-xl w-full mx-auto">
        <BlogFeed />
      </div>
      <footer className="w-full text-center mt-12 py-6 border-t border-border text-muted-foreground/75 text-xs">
        &copy; {new Date().getFullYear()} Unified Blog Showcase &mdash; All rights reserved.
      </footer>
    </div>
  );
};
export default Index;
