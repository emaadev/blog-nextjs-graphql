import Head from "next/head";
import { Montserrat } from "next/font/google";

import { Hero, FeaturedPosts, PostList, Footer, Layout } from "@/components";

import { getPosts } from "@/lib/getPosts";
import { PostNode } from "@/interfaces/data";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface HomeProps {
  posts: PostNode[];
}

export default function Home({ posts }: HomeProps) {
  const featuredPosts = posts.filter(
    (post: PostNode) => post.node.featuredPost === true
  );

  return (
    <main className={montserrat.className}>
      <Layout>
        <Head>
          <title>Web Development Official Blog</title>
          <meta name="description" content="Created by @emaadev" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero data={posts} />
        <FeaturedPosts data={featuredPosts} />
        <PostList />
        <Footer />
      </Layout>
    </main>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
