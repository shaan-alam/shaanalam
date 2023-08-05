import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-12 pt-12 pb-6 border-t border-zinc-800">
      <div className="w-[90%] mx-auto md:flex items-center justify-between">
        <h1 className="mb-6 md:mb-0 text-sm">
          Designed using NextJS, Tailwind and TypeScript
        </h1>
        <ul className="font-primary font-bold flex items-center">
          <Link href="/">
            <li className="mr-4 hover:underline transition-all">Home</li>
          </Link>
          <Link href="/projects">
            <li className="mr-4 hover:underline transition-all">Projects</li>
          </Link>
          <Link href="blogs">
            <li className="mr-4 hover:underline transition-all">Blogs</li>
          </Link>
          <Link href="/about">
            <li className="mr-4 hover:underline transition-all">About</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
