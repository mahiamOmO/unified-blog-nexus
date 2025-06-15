
import React from "react";
import PlatformBadge from "./PlatformBadge";
import { PlatformKey } from "@/utils/platformColors";
import BookmarkButton from "./BookmarkButton";
import AudioBlogStub from "./AudioBlogStub";

type Props = {
  post: {
    id: string;
    platform: PlatformKey;
    title: string;
    url: string;
    date: string;
    tags: string[];
    summary: string;
    views?: number;
    reactions?: number;
    readingTime?: string;
    wordcount?: number;
  };
  isBookmarked: boolean;
  onToggleBookmark: () => void;
};

const ArticleCard = ({
  post,
  isBookmarked,
  onToggleBookmark
}: Props) => (
  <div
    className="group relative border border-border shadow-lg rounded-2xl p-5 flex flex-col transition hover:shadow-xl hover:-translate-y-1 animate-fade-in overflow-hidden"
    style={{ minHeight: 220 }}
  >
    {/* Decorative gradient background */}
    <div className="absolute inset-0 pointer-events-none z-0 rounded-2xl bg-gradient-to-br from-pink-100 via-blue-100 via-purple-100 to-teal-100 opacity-70 group-hover:opacity-90 transition" />
    {/* Card content */}
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <PlatformBadge platform={post.platform} />
          <span className="ml-1 text-xs text-muted-foreground font-medium">{post.date}</span>
        </div>
        <BookmarkButton isBookmarked={isBookmarked} onToggle={onToggleBookmark} />
      </div>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold font-playfair mb-1.5 hover:underline story-link"
      >
        {post.title}
      </a>
      <div className="flex flex-wrap gap-1 mb-2">
        {post.tags.map((t) => (
          <span key={t} className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground mr-1">{t}</span>
        ))}
      </div>
      <p className="text-sm text-foreground/80 mb-2 line-clamp-3">{post.summary}</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
        {post.views !== undefined && (
          <span>
            👁️ {post.views}
          </span>
        )}
        {post.reactions !== undefined && (
          <span>
            ❤️ {post.reactions}
          </span>
        )}
        {post.readingTime && (
          <span>
            ⏱️ {post.readingTime}
          </span>
        )}
        {post.wordcount !== undefined && (
          <span>
            📝 {post.wordcount} words
          </span>
        )}
        <AudioBlogStub />
      </div>
    </div>
  </div>
);

export default ArticleCard;

