import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { CreatorPosts, Layout, Loading } from "@/components";

import { getPostBySlug } from "@/lib/getPostBySlug";
import { getAllPostsBySlugs } from "@/lib/getAllPostsBySlugs";
import getRelativeTime from "@/lib/getRelativeTime";

import { BsClock } from "react-icons/bs";
import styles from "@/styles/PostPage.module.css";

import { Post } from "@/interfaces/data";

interface PostPageProps {
  post: Post;
}

interface StaticPropsParams {
  params: {
    slug: string;
  };
}

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <Layout>
      <main className={styles.mainContainer}>
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Image
          src={post.image.url}
          alt={post.title}
          className={styles.postImage}
          width={1080}
          height={1080}
          priority
        />

        <section className={styles.sectionContainer}>
          <Link href="/">← Return to Home</Link>

          <div className={styles.postDate}>
            <span>Publication Date</span> <BsClock />{" "}
            <span>{getRelativeTime(post.publicationDate)}</span>
          </div>

          <h1>{post.title}</h1>
          <p>{post.description}</p>

          <div className={styles.creatorSection}>
            <Image
              src={post.creator.profileImage.url}
              width={620}
              height={620}
              alt={post.creator.name}
            />

            <div>
              <h4>{post.creator.name}</h4>
              <p>@{post.creator.username}</p>
            </div>
          </div>

          <hr className="section-divider" />

          <article
            dangerouslySetInnerHTML={{ __html: post.textContent.html }}
          />

          <hr className="section-divider" />

          <CreatorPosts
            authorId={post.creator.id}
            currentPostSlug={post.slug}
          />
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPostsBySlugs();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}
