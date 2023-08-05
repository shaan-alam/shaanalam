import AnimatedImage from "@/components/AnimatedImage";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Blog } from "@/@types/types";

const Writings: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
  return (
    <section className="w-[90%] mx-auto h-auto mt-24">
      <h1
        className="text-zinc-800 text-xl sm:text-4xl md:text-8xl font-bold uppercase"
        data-scroll
        data-scroll-speed="1"
      >
        Some of my writings
      </h1>
      <p
        className="text-zinc-800 md:text-xl text-base mt-6"
        data-scroll
        data-scroll-speed="1"
      >
        Check out some of my most popular blogs...
      </p>
      <div className="blogs md:grid grid-cols-3 gap-12 my-16">
        {blogs &&
          blogs.map((blog) => (
            <div
              className="blog my-8 md:my-0"
              data-scroll
              data-scroll-speed="2"
            >
              <AnimatedImage src={blog.cover_image} className="mb-4" />
              <Link href={`/blogs/${blog.id}`}>
                <h1 className="text-zinc-900 font-bold my-4 hover:underline text-2xl">
                  {blog.title}
                </h1>
              </Link>
              <p className="text-gray-500 leading-7 text-[0.75em]">
                {blog.description}
              </p>
            </div>
          ))}
      </div>
      <Link
        href="/blogs"
        className="text-zinc-800 hover:underline flex items-center"
        data-scroll
        data-scroll-speed="1"
      >
        See All Articles&nbsp;
        <MoveRight />
      </Link>
    </section>
  );
};

export default Writings;
