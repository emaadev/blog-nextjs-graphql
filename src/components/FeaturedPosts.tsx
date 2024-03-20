import TopicPost from "@/components/shared/TopicPost";

import { Post } from "@/lib/getPosts";

interface FeaturedPostsProps {
  data: any;
}

const FeaturedPosts = ({ data }: FeaturedPostsProps) => {
  console.log(data);
  return (
    <section>
      <h1>FeaturedPosts</h1>
      <p>Description of featured posts</p>

      {data.map((post: any) => (
        <div key={post.node.id}>
          <TopicPost data={post.node} />
        </div>
      ))}
    </section>
  );
};

export default FeaturedPosts;
