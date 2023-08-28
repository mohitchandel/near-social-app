"use client";
import CommentSection from "@/components/CommentSection";
import NavigationBar from "@/components/NavigationBar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function postPage() {
  const params = useParams();
  const postId = params.uid;

  const dummyTags = ["tag1", "tag2", "tag3"];

  return (
    <>
      <NavigationBar />
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div className="max-w-2xl mx-auto px-4">
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
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="grid grid-cols-12 gap-2 py-2">
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
              <div>
                <button>
                  <FontAwesomeIcon
                    style={{ color: "#47dd62" }}
                    icon={faHeart}
                    size="1x"
                  />
                  {" 12"}
                </button>
              </div>
            </div>
          </div>
          <CommentSection />
        </div>
      </section>
    </>
  );
}
