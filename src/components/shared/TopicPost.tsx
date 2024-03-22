import Image from "next/image";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";

import styles from "@/styles/FeaturedPosts.module.css";
import { Post } from "@/interfaces/data";

interface TopicPostPros {
  data: Post;
}

const TopicPost = ({ data }: TopicPostPros) => {
  return (
    <div className={styles.postContainer}>
      <Image
        src={data.image.url}
        className={styles.image}
        width={1080}
        height={1080}
        alt={data.title}
      />

      <div className={styles.imageCover} />

      <div className={styles.postContent}>
        <div className={styles.newPost}>New Post</div>

        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <Link href={`/post/${data.slug}`}>
          Read More
          <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  );
};

export default TopicPost;
