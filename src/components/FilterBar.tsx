
import React from "react";
import { platformColors, PlatformKey } from "@/utils/platformColors";

type Props = {
  platforms: PlatformKey[];
  selectedPlatforms: PlatformKey[];
  onTogglePlatform: (p: PlatformKey) => void;
  tags: string[];
  selectedTags: string[];
  onToggleTag: (t: string) => void;
  search: string;
  setSearch: (s: string) => void;
};

const FilterBar = ({
  platforms,
  selectedPlatforms,
  onTogglePlatform,
  tags,
  selectedTags,
  onToggleTag,
  search,
  setSearch,
}: Props) => (
  <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
    <div className="flex flex-wrap gap-2">
      {platforms.map((p) => (
        <button
          type="button"
          key={p}
          onClick={() => onTogglePlatform(p)}
          className={`rounded-full px-3 py-1 text-xs font-semibold border transition-all duration-150
            ${
              selectedPlatforms.includes(p)
                ? `${platformColors[p].bg} ${platformColors[p].text} border-transparent scale-105`
                : "bg-muted text-foreground border-border hover:scale-105"
            }
          `}
        >
          {platformColors[p].name}
        </button>
      ))}
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.length > 0 && tags.slice(0, 12).map((t) => (
        <button
          type="button"
          key={t}
          onClick={() => onToggleTag(t)}
          className={`rounded-full px-3 py-1 text-xs font-medium border transition-all duration-150
            ${
              selectedTags.includes(t)
                ? "bg-primary text-white border-transparent scale-105"
                : "bg-muted text-foreground border-border hover:scale-105"
            }
          `}
        >
          #{t}
        </button>
      ))}
    </div>
    <input
      type="text"
      placeholder="Search articles…"
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="ml-auto border border-input px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none bg-background"
      style={{ minWidth: 180 }}
    />
  </div>
);

export default FilterBar;
