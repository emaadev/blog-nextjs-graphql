import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <small>
        <Link
          href="https://github.com/emaadev/blog-nextjs-graphql"
          target="_blank"
          rel="noreferrer"
        >
          See the code of the blog here
        </Link>{" "}
        | Developed by{" "}
        <Link
          href="https://emanuel-nunez.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Emanuel Nuñez
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
