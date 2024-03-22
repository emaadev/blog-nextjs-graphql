"use client";
import { useState, useEffect } from "react";

import { PostCard, SectionTitle } from "@/components";
import { getPaginatedPosts } from "@/lib/getPaginatedPosts";

import { TbCardsFilled } from "react-icons/tb";
import { CiNoWaitingSign } from "react-icons/ci";
import styles from "@/styles/PostList.module.css";

import { PaginatedPost } from "@/interfaces/data";

const PostList = () => {
  const [posts, setPosts] = useState<PaginatedPost[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Call the getPaginatedPosts function to get the paginated posts
    const fetchMorePosts = async () => {
      const newPostsEdges = await getPaginatedPosts(page, 2);
      const newPosts = newPostsEdges.map(
        (edge: { node: PaginatedPost }) => edge.node
      );

      // Reset the post in the first view,
      // so that the assigned values are not repeated.
      if (page === 1) {
        setPosts(newPosts);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      }

      // If the page is the first one,
      // I don't fetch more posts until the user scroll
      if (newPosts.length < 2) {
        setHasMore(false);
      }
    };

    fetchMorePosts();
  }, [page]);

  useEffect(() => {
    // I evaluate the position of the ScrollBar,
    // if it approaches the position in which this component is,
    // then I increase to the following page
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <section id="allPosts" className="main-section">
      <SectionTitle title="See All Posts">
        <TbCardsFilled />
      </SectionTitle>

      <div className={styles.articleContainer}>
        {posts.map((post) => (
          <div key={post.id}>
            <PostCard
              image={post.image.url}
              title={post.title}
              description={post.description}
              creator={post.creator.username}
              postDate={post.createdAt}
              slug={post.slug}
            />
          </div>
        ))}
      </div>

      {!hasMore && (
        <div className={styles.noResults}>
          <CiNoWaitingSign />
          <p>No more posts to show.</p>
        </div>
      )}
    </section>
  );
};

export default PostList;
