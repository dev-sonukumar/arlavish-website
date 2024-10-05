import React, { useEffect } from "react";
import { Row, Wraper } from "../../components/ComponentsIndex";
import CommanBanner from "../Comman/CommanBanner";
import { about2 } from "../../components/Img/ImportedImage";
import Img from "../../components/Img/Img";
import { useSelector, useDispatch } from "react-redux";
import { getallblog } from "../../ReduxToolkit/Slice/Blog";
import { Link } from "react-router-dom";

const BlogSkeleton = () => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 my-5 animate-pulse">
    <div className="w-full h-52 bg-gray-300 rounded-t-lg"></div>
    <div className="p-5">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
    </div>
  </div>
);

function Blog() {
  const dispatch = useDispatch();
  const { blogs, status } = useSelector((state) => state.blog);

  //  Call API to fetch blogs
  useEffect(() => {
    if (status === "idle") {
      dispatch(getallblog());
    }
  }, [dispatch, status]);

  return (
    <Row>
      <CommanBanner title={"Our Blogs"} />
      <Row className="flex justify-center">
        <Wraper className="w-10/12">
          {status === "loading" ? (
            // Show 4 skeleton loaders while loading
            <>
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </>
          ) : (
            blogs &&
            blogs.map((item) => {
              const { blogTitle, image, description } = item;
              // Extract text content from HTML and limit to 80 words
              const textContent = description.split(" ");
              const truncatedText = textContent.slice(0, 80).join(" ");

              return (
                <div
                  key={item.id} // Ensure there's a unique key for each blog
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 my-5"
                >
                  <a href="#">
                    <Img
                      className="rounded-t-lg w-full h-52 object-cover"
                      src={image ? image : about2}
                      alt="Blog image"
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {blogTitle}
                      </h5>
                    </a>
                    <p
                      className="mb-3 font-normal text-gray-600 dark:text-gray-400"
                      dangerouslySetInnerHTML={{
                        __html:
                          truncatedText + (textContent.length > 80 ? "..." : ""),
                      }}
                    ></p>

                    <Link
                      to={``}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-700"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </Wraper>
      </Row>
    </Row>
  );
}

export default Blog;
``