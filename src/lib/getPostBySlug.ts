import { request, gql } from "graphql-request";

import { Post } from "@/interfaces/data";

// If the MASTER READ/WRITE endpoint is not available,
// then use the PUBLIC ONLY READ endpoint
const hygraphAPI =
  process.env.HYGRAPH_MASTER_ENDPOINT ||
  "https://sa-east-1.cdn.hygraph.com/content/cltyc5f86014a07w6j2qnu40l/master";

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const query = gql`
    query PostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        slug
        createdAt
        description
        id
        publicationDate
        creator {
          id
          name
          username
          profileImage {
            url
          }
          posts {
            id
            title
            description
            image {
              url
            }
          }
        }
        title
        textContent {
          html
        }
        image {
          url
        }
        featuredPost
      }
    }
  `;

  const result = await request<{ post: Post }>(hygraphAPI, query, { slug });

  return result.post;
};
