import Head from "next/head";
import { Montserrat } from "next/font/google";

import { Hero, FeaturedPosts, PostList } from "@/components";

import { getPosts } from "@/lib/getPosts";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface HomeProps {
  posts: any;
}

export default function Home({ posts }: HomeProps) {
  const featuredPosts = posts.filter(
    (post: any) => post.node.featuredPost === true
  );

  return (
    <main className={montserrat.className}>
      <Head>
        <title>Web Development Official Blog</title>
        <meta name="description" content="Created by @emaadev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <FeaturedPosts data={featuredPosts} />
      <PostList data={posts} />
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
