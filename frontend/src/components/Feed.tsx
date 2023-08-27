"use client";
import { useState } from "react";
import FeedBox from "@/components/FeedBox";

export default function Feed() {
  const totalFeedBoxes = 10; // Total number posts
  const loadMoreIncrement = 5;

  const [displayCount, setDisplayCount] = useState(loadMoreIncrement);
  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + loadMoreIncrement);
  };

  const showLoadMoreButton = displayCount < totalFeedBoxes;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {Array.from({ length: displayCount }).map((_, index) => (
        <FeedBox key={index} />
      ))}

      {showLoadMoreButton && (
        <button
          onClick={handleLoadMore}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
}
