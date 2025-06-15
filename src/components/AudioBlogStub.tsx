
import React from "react";
import { Volume2 } from "lucide-react";

const AudioBlogStub = () => (
  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
    <Volume2 size={16} className="text-primary" />
    <span className="italic">Audio coming soon</span>
  </div>
);

export default AudioBlogStub;
