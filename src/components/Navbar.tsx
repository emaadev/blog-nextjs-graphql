import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link href="/" className="logo">
        <span>{"{"}</span> <span>{"}"}</span> The Big Code Theory.
      </Link>

      <div className="navbar-links">
        <Link href="#allPosts" className="logo">
          See All Posts
        </Link>

        <Link
          href="https://emanuel-nunez.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="logo"
        >
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
