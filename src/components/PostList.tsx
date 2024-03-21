import { PostCard, SectionTitle } from "@/components";

import { TbCardsFilled } from "react-icons/tb";
import styles from "@/styles/PostList.module.css";

interface PostListProps {
  data: any;
}

const PostList = ({ data }: PostListProps) => {
  console.log();

  return (
    <section className="main-section">
      <SectionTitle title="See All Posts">
        <TbCardsFilled />
      </SectionTitle>

      <article className={styles.articleContainer}>
        {data.map((post: any) => (
          <div key={post.id}>
            <PostCard
              image={post.node.image.url}
              title={post.node.title}
              description={post.node.description}
              creator={post.node.creator.username}
              postDate={post.node.createdAt}
            />
          </div>
        ))}
      </article>
    </section>
  );
};

export default PostList;
