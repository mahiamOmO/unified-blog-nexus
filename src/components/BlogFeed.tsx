import React, { useEffect, useState, useMemo } from "react";
import ArticleCard from "./ArticleCard";
import StatsDashboard from "./StatsDashboard";
import FilterBar from "./FilterBar";
import { PlatformKey } from "@/utils/platformColors";

type RawDevToPost = {
  id: number;
  title: string;
  url: string;
  published_at: string;
  tags: string[];
  description: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  page_views_count?: number;
  reading_time_minutes: number;
  body_markdown?: string;
  word_count?: number;
};

const DEVTO_USERNAME = "ben"; // update this to your dev.to username

const fetchDevtoPosts = async (): Promise<RawDevToPost[]> => {
  const resp = await fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}`);
  if (!resp.ok) throw new Error("Failed to fetch Dev.to");
  return resp.json();
};

// Placeholder/demo medium/hashnode data
const staticMedium = [
  {
    id: "m-1",
    title: "Design for Accessibility: Top Tips",
    url: "https://medium.com/@example/design-for-accessibility",
    published_at: "2023-12-02",
    tags: ["Accessibility", "Web"],
    description: "How to make your web content accessible to everyone.",
    positive_reactions_count: 126,
    public_reactions_count: 40,
    page_views_count: 900,
    reading_time_minutes: 6,
    word_count: 1200
  }
];

const staticHashnode = [
  {
    id: "h-1",
    title: "Improving Developer Productivity with VSCode",
    url: "https://hashnode.com/post/improving-productivity-vscode",
    published_at: "2024-01-10",
    tags: ["VSCode", "Productivity"],
    description: "Work faster and smarter with these VSCode tips.",
    positive_reactions_count: 88,
    public_reactions_count: 7,
    page_views_count: 600,
    reading_time_minutes: 4,
    word_count: 900
  }
];

type NormalizedPost = {
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

// Helper: ensure tags is always string[]
function toTagArray(val: string[] | string | undefined): string[] {
  if (Array.isArray(val)) return val.map(t => String(t));
  if (typeof val === "string") {
    return val
      .split(",")
      .map(t => t.trim())
      .filter(Boolean);
  }
  return [];
}

function normalizeDevto(post: RawDevToPost): NormalizedPost {
  // Dev.to can send tags as array or comma string (edge case), defensively handle both
  return {
    id: `devto-${post.id}`,
    platform: "devto",
    title: post.title,
    url: post.url,
    date: post.published_at.slice(0, 10),
    tags: toTagArray(post.tags),
    summary: post.description,
    views: post.page_views_count,
    reactions: post.positive_reactions_count,
    readingTime: `${post.reading_time_minutes} min`,
    wordcount: post.word_count,
  };
}

function normalizeMedium(post: any): NormalizedPost {
  return {
    id: `medium-${post.id}`,
    platform: "medium",
    title: post.title,
    url: post.url,
    date: post.published_at,
    tags: toTagArray(post.tags),
    summary: post.description,
    views: post.page_views_count,
    reactions: post.positive_reactions_count,
    readingTime: `${post.reading_time_minutes} min`,
    wordcount: post.word_count,
  };
}

function normalizeHashnode(post: any): NormalizedPost {
  return {
    id: `hashnode-${post.id}`,
    platform: "hashnode",
    title: post.title,
    url: post.url,
    date: post.published_at,
    tags: toTagArray(post.tags),
    summary: post.description,
    views: post.page_views_count,
    reactions: post.positive_reactions_count,
    readingTime: `${post.reading_time_minutes} min`,
    wordcount: post.word_count,
  };
}

const getInitialBookmarks = () => {
  if (typeof window === "undefined") return new Set<string>();
  try {
    return new Set<string>(JSON.parse(localStorage.getItem("readLater") || "[]"));
  } catch { return new Set<string>(); }
};

const BlogFeed = () => {
  const [posts, setPosts] = useState<NormalizedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<Set<string>>(getInitialBookmarks);
  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformKey[]>(["devto", "medium", "hashnode"]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchDevtoPosts()
        .then(d => d.map(normalizeDevto))
        .catch(() => []),
      Promise.resolve(staticMedium.map(normalizeMedium)),
      Promise.resolve(staticHashnode.map(normalizeHashnode)),
    ]).then(([devto, medium, hashnode]) => {
      const allPosts = [
        ...devto,
        ...medium,
        ...hashnode
      ];
      setPosts(allPosts.sort((a, b) => b.date.localeCompare(a.date)));
      setLoading(false);
    }).catch((err) => {
      setError("Could not fetch blog posts.");
      setLoading(false);
    });
  }, []);

  // Update bookmarks in localStorage whenever bookmarks change
  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("readLater", JSON.stringify(Array.from(bookmarks)));
  }, [bookmarks]);

  // Defensive: make sure post.tags is always an array in tag extraction. Futureproof!
  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(post => {
      (Array.isArray(post.tags) ? post.tags : []).forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter(post =>
      (selectedPlatforms.includes(post.platform)) &&
      (selectedTags.length === 0 || post.tags.some(t => selectedTags.includes(t))) &&
      (search.length < 2 || post.title.toLowerCase().includes(search.toLowerCase()) || post.summary.toLowerCase().includes(search.toLowerCase()))
    );
  }, [posts, selectedPlatforms, selectedTags, search]);

  // Stats
  const stats = useMemo(() => {
    let totalPosts = posts.length;
    let totalViews = posts.reduce((sum, p) => sum + (p.views || 0), 0);
    let totalReactions = posts.reduce((sum, p) => sum + (p.reactions || 0), 0);
    let wordcount = posts.reduce((sum, p) => sum + (p.wordcount || 0), 0);
    const mostPopular = posts.reduce((acc, p) => (p.views && (!acc || p.views > acc.views)) ? p : acc, undefined as NormalizedPost | undefined);
    return {
      totalPosts,
      totalViews,
      totalReactions,
      wordcount,
      mostPopular: mostPopular
        ? { title: mostPopular.title, url: mostPopular.url, views: mostPopular.views!, platform: mostPopular.platform }
        : undefined
    };
  }, [posts]);

  return (
    <section>
      <StatsDashboard
        totalPosts={stats.totalPosts}
        totalViews={stats.totalViews}
        totalReactions={stats.totalReactions}
        wordcount={stats.wordcount}
        mostPopular={stats.mostPopular}
      />
      <FilterBar
        platforms={["devto", "medium", "hashnode"]}
        selectedPlatforms={selectedPlatforms}
        onTogglePlatform={p =>
          setSelectedPlatforms(selectedPlatforms.includes(p)
            ? selectedPlatforms.filter(x => x !== p)
            : [...selectedPlatforms, p])
        }
        tags={tags}
        selectedTags={selectedTags}
        onToggleTag={t =>
          setSelectedTags(selectedTags.includes(t)
            ? selectedTags.filter(x => x !== t)
            : [...selectedTags, t])
        }
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <div className="w-full flex justify-center py-20 animate-pulse text-lg font-semibold text-muted-foreground">
          Loading posts...
        </div>
      ) : error ? (
        <div className="w-full flex justify-center py-20 text-destructive font-semibold text-lg">
          Error: {error}
        </div>
      ) : (
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-muted-foreground py-8 text-lg font-semibold">No posts match your filters.</div>
          )}
          {filtered.map(post => (
            <ArticleCard
              key={post.id}
              post={post}
              isBookmarked={bookmarks.has(post.id)}
              onToggleBookmark={() =>
                setBookmarks(bm =>
                  bm.has(post.id)
                    ? new Set([...bm].filter(x => x !== post.id))
                    : new Set([...bm, post.id])
                )
              }
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogFeed;
