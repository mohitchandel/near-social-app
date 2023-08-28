"use client";
import NavigationBar from "@/components/NavigationBar";
import React from "react";

export default function Post() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const content = (document.getElementById("content") as HTMLInputElement)
      .value;
    const tags = (document.getElementById("tags") as HTMLInputElement).value;
    const imageInput = document.getElementById(
      "image"
    ) as HTMLInputElement | null;
    const image = imageInput?.files?.[0];
  };

  return (
    <>
      <NavigationBar />
      <section className="min-h-screen flex flex-col	bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div className="w-2/4 mx-auto ">
          <h2 className="text-lg font-semibold mb-4">Create a New Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <textarea
                id="content"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Post content..."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="tags"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add tags separated by commas"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
