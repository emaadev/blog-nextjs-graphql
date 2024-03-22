import { TopicPost, SectionTitle } from "@/components";
import { Post, PostNode } from "@/interfaces/data";

import styles from "@/styles/FeaturedPosts.module.css";
import { IoStarHalf } from "react-icons/io5";

interface FeaturedPostsProps {
  data: PostNode[];
}

const FeaturedPosts = ({ data }: FeaturedPostsProps) => {
  return (
    <section className="main-section">
      <SectionTitle title="Editor's Choice">
        <IoStarHalf />
      </SectionTitle>

      <article className={styles.articleContainer}>
        {data.map((post: PostNode) => (
          <div key={post.node.id}>
            <TopicPost data={post.node} />
          </div>
        ))}
      </article>
    </section>
  );
};

export default FeaturedPosts;
