import { Blog } from "@/@types/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import Layout from "@/components/Layout";
import AnimatedImage from "@/components/AnimatedImage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/components/CodeBlock";
import Moment from "react-moment";
import { HiHeart, HiChat, HiClock } from "react-icons/hi";

const Blog = ({
  blog,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <section className="blog-section">
        <div className="w-full">
          <AnimatedImage
            src={blog.cover_image}
            alt={blog.title}
            className="mb-8"
          />
          <h1 className="text-center w-[60%] mx-auto text-black dark:text-white text-xl sm:text-4xl font-secondary font-bold">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center w-full mt-4 text-sm">
            <div className="text-gray-600 dark:text-gray-300 flex items-center mr-3 text-sm font-secondary">
              <HiHeart />
              &nbsp;{blog.public_reactions_count}
            </div>
            <div className="text-gray-600 dark:text-gray-300 flex items-center mr-3 text-sm font-secondary">
              <HiChat />
              &nbsp;{blog.comments_count}
            </div>
            <div className="text-gray-600 dark:text-gray-300 flex items-center mr-3 text-sm font-secondary">
              <HiClock />
              &nbsp;{blog.reading_time_minutes} minutes
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-300 my-4 text-sm font-secondary">
          <Moment format="D MMM YYYY" withTitle>
            {blog.published_at}
          </Moment>
        </div>
        <div className="blog_content">
          {blog?.body_markdown && (
            <ReactMarkdown
              children={blog?.body_markdown}
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ children, href, ...props }: any) => {
                  return (
                    <a href={href} className="text-blue-500">
                      {children}
                    </a>
                  );
                },
                code: ({ ...props }: any) => {
                  return (
                    <CodeBlock code={props.children[0]} language={"tsx"} />
                  );
                },
              }}
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps<
  { blog: Blog },
  { id: string }
> = async (context) => {
  const res = await axios.get<Blog>(
    `https://dev.to/api/articles/${context.params?.id}`,
    {
      headers: {
        "api-key": "9d4XM7raYQDcUkZKSeKvVXii",
      },
    }
  );

  return {
    props: {
      blog: res.data,
    },
  };
};
