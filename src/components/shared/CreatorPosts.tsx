"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components";

import { getCreatorById } from "@/lib/getCreatorById";

import { MdAddToPhotos } from "react-icons/md";
import styles from "@/styles/CreatorPosts.module.css";

interface CreatorPost {
  id: string;
  title: string;
  slug: string;
  image: {
    url: string;
  };
}

interface CreatorPostsProps {
  authorId: string;
  currentPostSlug: string;
}

const CreatorPosts = ({ authorId, currentPostSlug }: CreatorPostsProps) => {
  const [posts, setPosts] = useState<CreatorPost[]>([]);

  useEffect(() => {
    const fetchAuthorPosts = async () => {
      const creator = await getCreatorById(authorId);

      if (creator && Array.isArray(creator.posts)) {
        const relatedPosts = creator.posts.filter(
          (post: CreatorPost) => post.slug !== currentPostSlug
        );
        setPosts(relatedPosts);
      }
    };

    fetchAuthorPosts();
  }, [authorId, currentPostSlug]);

  return (
    <article>
      <SectionTitle title={`More Posts by the Author`}>
        <MdAddToPhotos />
      </SectionTitle>

      <div className={styles.creatorPostsContainer}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.slug}`}
            className={styles.creatorPostLink}
          >
            <Image
              src={post.image.url}
              width={100}
              height={100}
              alt={post.title}
              className={styles.creatorPostImage}
            />
            <span>{post.title}</span>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default CreatorPosts;
