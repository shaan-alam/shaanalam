import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-8">
      <div className="container w-[80%] mx-auto flex items-center justify-end">
        <ul className="list-none font-primary font-bold flex items-center">
          <Link href="/">
            <li className="mr-4 hover:underline transition-all">Home</li>
          </Link>
          <Link href="/projects">
            <li className="mr-4 hover:underline transition-all">Projects</li>
          </Link>
          <Link href="/blogs">
            <li className="mr-4 hover:underline transition-all">Blogs</li>
          </Link>
          <Link href="/about">
            <li className="mr-4 hover:underline transition-all">About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
