import Head from "next/head";
import { Bricolage_Grotesque } from "next/font/google";

import { Hero, FeaturedPosts } from "@/components";

import { Post, getPosts } from "@/lib/getPosts";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400"],
});

interface HomeProps {
  posts: any;
}

export default function Home({ posts }: HomeProps) {
  const featuredPosts = posts.filter(
    (post: any) => post.node.featuredPost === true
  );

  return (
    <main className={bricolageGrotesque.className}>
      <Head>
        <title>Web Development Official Blog</title>
        <meta name="description" content="Created by @emaadev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <FeaturedPosts data={featuredPosts} />
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
