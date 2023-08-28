import FeedBox from "./FeedBox";

export default function CommentSection() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Comments (2)
        </h2>
      </div>
      <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={6}
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Post comment
        </button>
      </form>
      <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              BonnieGreen22
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time title="March 12th, 2022">Mar. 12, 2022</time>
            </p>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          The article covers the essentials, challenges, myths and stages the UX
          designer should consider while creating the design strategy.
        </p>
      </article>
      <article className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              HeleneEngels
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time title="March 12th, 2022">Mar. 12, 2022</time>
            </p>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Thanks for sharing this. I do came from the Backend development and
          explored some of the tools to design my Side Projects.
        </p>
      </article>
    </>
  );
}
