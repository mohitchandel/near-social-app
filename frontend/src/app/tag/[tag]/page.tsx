"use client";
import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { useParams } from "next/navigation";
import TagFeed from "@/components/TagFeed";

export default function TagPost() {
  const params = useParams();
  const tag = params.tag;

  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col min-h-screen items-center justify-between ">
      <NavigationBar />

      <div className="w-full bg-blue-200 p-4 rounded shadow-md text-center py-16 px-8 mb-8">
        <p className="text-xl font-semibold text-gray-700">
          Posts related to {tag}
        </p>
      </div>

      <TagFeed tag />
    </div>
  );
}
