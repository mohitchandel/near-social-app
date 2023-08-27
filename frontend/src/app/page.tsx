import React from "react";
import Feed from "./../components/Feed"; // Import your Feed component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between ">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between mb-5 py-8 px-8">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">Social Near</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Connect Wallet
          </button>
          {/* should be condition if wallet is connected or not */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Post
          </button>
        </div>
      </nav>

      {/* Banner */}
      <div className="w-full bg-gray-200 p-4 rounded shadow-md text-center py-16 px-8 mb-8">
        <p className="text-xl font-semibold">Welcome to Near Social App!</p>
        <p className="text-gray-700">Connect wallet and start posting.</p>
      </div>

      {/* Feed */}
      <Feed />
    </div>
  );
}
