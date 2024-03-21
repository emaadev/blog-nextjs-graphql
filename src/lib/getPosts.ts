import { request, gql } from "graphql-request";

import { Post } from "@/interfaces/data";

// If the MASTER READ/WRITE endpoint is not available,
// then use the PUBLIC ONLY READ endpoint
const hygraphAPI =
  process.env.HYGRAPH_MASTER_ENDPOINT ||
  "https://sa-east-1.cdn.hygraph.com/content/cltyc5f86014a07w6j2qnu40l/master";

interface PostsConnection {
  postsConnection: {
    edges: {
      node: Post;
    };
  };
}

export const getPosts = async () => {
  const query = gql`
    query MyPosts {
      postsConnection {
        edges {
          node {
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
      }
    }
  `;

  const result = await request<PostsConnection>(hygraphAPI, query);

  return result.postsConnection.edges;
};
