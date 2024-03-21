import { TopicPost, SectionTitle } from "@/components";

import styles from "@/styles/FeaturedPosts.module.css";
import { IoStarHalf } from "react-icons/io5";

interface FeaturedPostsProps {
  data: any;
}

const FeaturedPosts = ({ data }: FeaturedPostsProps) => {
  return (
    <section className="main-section">
      <SectionTitle title="Editor's Choice">
        <IoStarHalf />
      </SectionTitle>

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
