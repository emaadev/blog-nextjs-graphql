import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link href="/" className="logo">
        {"{"}
        {"}"} The Code Theory.
      </Link>

      <Link href="/#allPosts" className="logo">
        See All Posts
      </Link>
    </nav>
  );
};

export default Navbar;
