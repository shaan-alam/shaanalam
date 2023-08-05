import AnimatedImage from "@/components/AnimatedImage";
import Layout from "@/components/Layout";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Writings = () => {
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
        <div className="blog my-8 md:my-0" data-scroll data-scroll-speed="1">
          <AnimatedImage
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--PUXvTLmv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tbk7jtnv6px9eq28fvk3.png"
            className="mb-4"
          />
          <h1 className="text-zinc-900 font-bold my-4 hover:underline text-2xl">
            Build a Blogging Site using NextJS and MDX
          </h1>
          <p className="text-gray-500 leading-7 text-[0.75em]">
            Do you want start your blog where you educate others, or may be you
            want a blog as a repository of all the information you’ve gathered
          </p>
        </div>
        <div className="blog my-8 md:my-0" data-scroll data-scroll-speed="2">
          <AnimatedImage
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--PUXvTLmv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tbk7jtnv6px9eq28fvk3.png"
            className="mb-4"
          />
          <h1 className="text-zinc-900 font-bold my-4 hover:underline text-2xl">
            Build a Blogging Site using NextJS and MDX
          </h1>
          <p className="text-gray-500 leading-7 text-[0.75em]">
            Do you want start your blog where you educate others, or may be you
            want a blog as a repository of all the information you’ve gathered
          </p>
        </div>
        <div className="blog my-8 md:my-0" data-scroll data-scroll-speed="3">
          <AnimatedImage
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--PUXvTLmv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tbk7jtnv6px9eq28fvk3.png"
            className="mb-4"
          />
          <h1 className="text-zinc-900 font-bold my-4 hover:underline text-2xl">
            Build a Blogging Site using NextJS and MDX
          </h1>
          <p className="text-gray-500 leading-7 text-[0.75em]">
            Do you want start your blog where you educate others, or may be you
            want a blog as a repository of all the information you’ve gathered
          </p>
        </div>
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
