import { Blog } from "@/@types/types";
import Layout from "@/components/Layout";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import AnimatedImage from "@/components/AnimatedImage";
import Link from "next/link";

const Blogs: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ blogs }) => {
  return (
    <Layout>
      <section className="w-[90%] mx-auto">
        <h1 className="font-primary text-xl sm:text-4xl md:text-8xl font-bold mb-4">
          My Articles
        </h1>
        <div className="blogs sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
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
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;

export const getServerSideProps: GetServerSideProps<{
  blogs: Blog[];
}> = async () => {
  const res = await axios.get<Blog[]>(
    "https://dev.to/api/articles/me/published",
    {
      headers: {
        "api-key": "9d4XM7raYQDcUkZKSeKvVXii",
      },
    }
  );

  return {
    props: {
      blogs: res.data,
    },
  };
};
