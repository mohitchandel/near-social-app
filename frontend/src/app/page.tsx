import React from "react";
import Feed from "./../components/Feed"; // Import your Feed component
import NavigationBar from "@/components/NavigationBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col min-h-screen items-center justify-between ">
      <NavigationBar />

      {/* Banner */}
      <div className="w-full bg-blue-200 p-4 rounded shadow-md text-center py-16 px-8 mb-8">
        <p className="text-xl font-semibold text-gray-700">
          Welcome to Near Social App!
        </p>
        <p className="text-gray-700">
          Connect wallet and (username let's) start posting.
        </p>
        <p className="text-blue-700">
          <Link href="/post">Create Post</Link>
        </p>
      </div>

      {/* Feed */}
      <Feed />
    </div>
  );
}
