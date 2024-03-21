import Image from "next/image";
import Link from "next/link";

import getRelativeTime from "@/lib/getRelativeTime";

import { BsClock } from "react-icons/bs";
import styles from "@/styles/PostCard.module.css";

interface PostCardProps {
  image: string;
  title: string;
  description: string;
  creator: string;
  postDate: string;
  slug: string;
}

const PostCard = ({
  image,
  title,
  description,
  creator,
  postDate,
  slug,
}: PostCardProps) => {
  return (
    <div className={styles.postContainer}>
      <Image src={image} alt={title} width={1080} height={1080} />

      <div className={styles.creatorContainer}>
        <span className={styles.creator}>@{creator}</span> <BsClock />{" "}
        <span className={styles.postDate}>{getRelativeTime(postDate)}</span>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>

      <Link href={`/post/${slug}`}>Read Post</Link>
    </div>
  );
};

export default PostCard;
