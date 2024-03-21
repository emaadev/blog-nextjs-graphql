import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link href="/" className="logo">
        <span>{"{"}</span> <span>{"}"}</span> The Big Code Theory.
      </Link>
    </nav>
  );
};

export default Navbar;
