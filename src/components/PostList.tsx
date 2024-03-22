"use client";
import { useState, useEffect } from "react";

import { PostCard, SectionTitle } from "@/components";

import { TbCardsFilled } from "react-icons/tb";
import styles from "@/styles/PostList.module.css";
import { CiNoWaitingSign } from "react-icons/ci";

interface PostListProps {
  data: any;
}

const PostList = ({ data }: PostListProps) => {
  const [posts, setPosts] = useState(data.slice(0, 2));
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchMorePosts = () => {
      if (posts.length >= data.length) {
        setHasMore(false);
        return;
      }

      // There are 2 more posts only for show the InfiniteScroll
      const newPosts = data.slice(posts.length, posts.length + 2);
      setPosts([...posts, ...newPosts]);
    };

    // Every time the user use the scrollbar,
    // I look if the scroll is on the same place as the post list
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        fetchMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [data, posts]);

  return (
    <section id="allPosts" className="main-section">
      <SectionTitle title="See All Posts">
        <TbCardsFilled />
      </SectionTitle>

      <div className={styles.articleContainer}>
        {posts.map((post: any) => (
          <div key={post.node.id}>
            <PostCard
              image={post.node.image.url}
              title={post.node.title}
              description={post.node.description}
              creator={post.node.creator.username}
              postDate={post.node.createdAt}
              slug={post.node.slug}
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
