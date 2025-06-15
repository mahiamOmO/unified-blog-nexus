
import React from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

type Props = {
  isBookmarked: boolean;
  onToggle: () => void;
};

const BookmarkButton = ({ isBookmarked, onToggle }: Props) => (
  <button
    onClick={onToggle}
    className="ml-2 hover:scale-110 transition p-1 rounded text-primary border-none bg-transparent outline-none"
    title={isBookmarked ? "Remove from Read Later" : "Save to Read Later"}
    aria-label="Bookmark"
  >
    {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
  </button>
);

export default BookmarkButton;
