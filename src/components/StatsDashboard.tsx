
import React from "react";
import { TrendingUp, FileText, Star } from "lucide-react";

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

const colorfulNumberClass =
  "text-3xl font-playfair font-bold bg-gradient-to-r from-pink-500 via-yellow-400 via-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent";

const iconStyle = "mb-2 text-primary opacity-75";

const StatsDashboard = ({
  totalPosts,
  totalViews,
  totalReactions,
  wordcount,
  mostPopular,
}: Props) => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
    <div className="bg-card shadow rounded-xl px-4 py-4 flex flex-col items-center animate-fade-in">
      <FileText size={26} className={iconStyle} />
      <span className={colorfulNumberClass}>{totalPosts}</span>
      <span className="uppercase text-xs mt-1 text-muted-foreground tracking-wide">Total Posts</span>
    </div>
    <div className="bg-card shadow rounded-xl px-4 py-4 flex flex-col items-center animate-fade-in">
      <TrendingUp size={26} className={iconStyle} />
      <span className={colorfulNumberClass}>{totalViews}</span>
      <span className="uppercase text-xs mt-1 text-muted-foreground tracking-wide">Views</span>
    </div>
    <div className="bg-card shadow rounded-xl px-4 py-4 flex flex-col items-center animate-fade-in">
      <Star size={26} className={iconStyle} />
      <span className={colorfulNumberClass}>{totalReactions}</span>
      <span className="uppercase text-xs mt-1 text-muted-foreground tracking-wide">Reactions</span>
    </div>
    <div className="bg-card shadow rounded-xl px-4 py-4 flex flex-col items-center animate-fade-in">
      <span className="text-2xl font-playfair font-bold mb-2 bg-gradient-to-r from-pink-500 via-yellow-400 via-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent">📝</span>
      <span className={colorfulNumberClass}>{wordcount}</span>
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
