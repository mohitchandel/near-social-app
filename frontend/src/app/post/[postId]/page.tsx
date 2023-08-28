"use client";
import CommentSection from "@/components/CommentSection";
import NavigationBar from "@/components/NavigationBar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";

export default function postPage() {
  const params = useParams();
  const postId = params.uid;

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
              <div>
                <button>
                  <FontAwesomeIcon
                    style={{ color: "#47dd62" }}
                    icon={faHeart}
                    size="1x"
                  />
                  12
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
