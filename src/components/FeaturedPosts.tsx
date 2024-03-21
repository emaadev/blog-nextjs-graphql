import TopicPost from "@/components/shared/TopicPost";

import { Post } from "@/lib/getPosts";

import styles from "@/styles/FeaturedPosts.module.css";
import { IoStarHalf } from "react-icons/io5";

interface FeaturedPostsProps {
  data: any;
}

const FeaturedPosts = ({ data }: FeaturedPostsProps) => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Editor&apos;s Choice</h1>
        <IoStarHalf />
      </div>

      <article className={styles.articleContainer}>
        {data.map((post: any) => (
          <div key={post.node.id}>
            <TopicPost data={post.node} />
          </div>
        ))}
      </article>
    </section>
  );
};

export default FeaturedPosts;
