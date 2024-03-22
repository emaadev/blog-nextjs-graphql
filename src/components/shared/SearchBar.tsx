"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BiSearchAlt } from "react-icons/bi";
import styles from "@/styles/SearchBar.module.css";

interface SearchBarProps {
  data: any;
}

const SearchBar = ({ data }: SearchBarProps) => {
  const [searchPost, setSearchPost] = useState<string>("");

  const handleSearch = (e: any) => {
    setSearchPost(e.target.value);
  };

  // Receive all the posts and then filter the lowercase titles
  // of each post and analyze if it includes the text that
  // is enter in lowercase through the input
  const searchedPosts = data.filter((post: any) =>
    post.node.title.toLowerCase().includes(searchPost.toLowerCase())
  );

  return (
    <div className={styles.searchBarContainer}>
      <BiSearchAlt />
      <input
        id="searchBar"
        type="text"
        placeholder="Find the blog you are looking for..."
        className={styles.searchBar}
        value={searchPost}
        onChange={(e) => handleSearch(e)}
      />

      {searchPost !== "" && (
        <div className={styles.searchedPosts}>
          {searchedPosts.length > 0 ? (
            searchedPosts.map((post: any) => (
              <div key={post.node.id}>
                <Link
                  href={`/post/${post.node.slug}`}
                  className={styles.searchedPost}
                >
                  <Image
                    src={post.node.image.url}
                    width={50}
                    height={50}
                    alt={post.node.title}
                  />
                  <p>{post.node.title}</p>
                </Link>
              </div>
            ))
          ) : (
            <p className={styles.noResults}>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
