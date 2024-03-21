import { request, gql } from "graphql-request";

// If the MASTER READ/WRITE endpoint is not available,
// then use the PUBLIC ONLY READ endpoint
const hygraphAPI =
  process.env.HYGRAPH_MASTER_ENDPOINT ||
  "https://sa-east-1.cdn.hygraph.com/content/cltyc5f86014a07w6j2qnu40l/master";

export const getAllPostsBySlugs = async (): Promise<{ slug: string }[]> => {
  const query = gql`
    query AllPostSlugs {
      posts {
        slug
      }
    }
  `;

  const result = await request<{ posts: { slug: string }[] }>(
    hygraphAPI,
    query
  );
  return result.posts;
};
