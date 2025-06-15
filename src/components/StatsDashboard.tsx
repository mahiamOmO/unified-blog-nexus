
import React from "react";
import { trendingUp, fileText, star } from "lucide-react";

type Props = {
  totalPosts: number;
  totalViews: number;
  totalReactions: number;
  wordcount: number;
  mostPopular?: {
    title: string;
    url: string;
    views: number;
    platform: string;
  };
};

const StatsDashboard = ({
  totalPosts,
  totalViews,
  totalReactions,
  wordcount,
  mostPopular,
}: Props) => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
    <div className="bg-card shadow rounded-xl px-4 py-4 flex flex-col items-center animate-fade-in">
      <span className="text-3xl font-playfair font-bold">{totalPosts}</span>
      <span className="uppercase text-xs mt-1 text-muted-foreground tracking-wide">Total Posts</span>
    </div>
    <div className="bg-card shadow rounded-xl px-4 py-4 flex flex-col items-center animate-fade-in">
      <span className="text-3xl font-playfair font-bold">{totalViews}</span>
      <span className="uppercase text-xs mt-1 text-muted-foreground tracking-wide">Views</span>
    </div>
    <div className="bg-card shadow rounded-xl px-4 py-4 flex flex-col items-center animate-fade-in">
      <span className="text-3xl font-playfair font-bold">{totalReactions}</span>
      <span className="uppercase text-xs mt-1 text-muted-foreground tracking-wide">Reactions</span>
    </div>
    <div className="bg-card shadow rounded-xl px-4 py-4 flex flex-col items-center animate-fade-in">
      <span className="text-3xl font-playfair font-bold">{wordcount}</span>
      <span className="uppercase text-xs mt-1 text-muted-foreground tracking-wide">Word Count</span>
    </div>
    <div className="bg-card shadow rounded-xl px-4 py-4 flex flex-col items-center animate-fade-in">
      <span className="text-sm text-muted-foreground">Most Popular</span>
      {mostPopular ? (
        <a
          href={mostPopular.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-primary underline hover:text-accent-foreground mt-1 transition story-link"
        >
          {mostPopular.title}
        </a>
      ) : (
        <span className="italic text-muted-foreground">—</span>
      )}
    </div>
  </div>
);

export default StatsDashboard;
