import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function FeedBox() {
  //   image: string,
  //   title: string,
  //   description: string,
  //   link: string,
  //   likesCount: number
  //   commentsCount: number
  //   tags: string[]
  //   hasImage: bool

  const dummyTags = ["tag1", "tag2", "tag3"];

  return (
    <div
      style={{ margin: "10px 0" }}
      className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            someaccount123
          </h5>
        </a>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-light text-gray-900 dark:text-gray-400">
            2021-08-01
          </span>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="grid grid-cols-12 gap-2">
          {dummyTags.map((tag, index) => (
            <Link
              key={index}
              href={`/tag/${tag}`}
              className="px-2 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              {tag}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-0 my-2">
          <div>
            <FontAwesomeIcon style={{ color: "#47dd62" }} icon={faHeart} />
            <span style={{ paddingInline: "5px" }}>12</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span style={{ paddingInline: "5px" }}>9</span>
          </div>
        </div>
        <Link
          href="/post/12"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Check Out
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
