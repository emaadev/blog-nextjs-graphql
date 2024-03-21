import Image from "next/image";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";

import styles from "@/styles/FeaturedPosts.module.css";

interface TopicPostPros {
  data: any;
}

const TopicPost = ({ data }: TopicPostPros) => {
  return (
    <div className={styles.postContainer}>
      <Image
        src={data.image.url}
        className={styles.image}
        width={1080}
        height={1080}
        alt=""
      />

      <div className={styles.imageCover} />

      <div className={styles.postContent}>
        <div className={styles.newPost}>New Post</div>

        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <Link href={`/${data.id}`} target="_blank" rel="noopener noreferrer">
          Read More
          <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  );
};

export default TopicPost;
