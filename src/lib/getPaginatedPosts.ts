import { request, gql } from "graphql-request";
import { PaginatedPost } from "@/interfaces/data";

// If the MASTER READ/WRITE endpoint is not available,
// then use the PUBLIC ONLY READ endpoint
const hygraphAPI =
  process.env.HYGRAPH_MASTER_ENDPOINT ||
  "https://sa-east-1.cdn.hygraph.com/content/cltyc5f86014a07w6j2qnu40l/master";

interface PostsConnection {
  postsConnection: {
    edges: {
      // I added the "x" property to use it as a key for the pagination
      [x: string]: any;
      node: PaginatedPost;
    };
  };
}

export const getPaginatedPosts = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const query = gql`
    query MyPosts($skip: Int!, $limit: Int!) {
      postsConnection(first: $limit, skip: $skip) {
        edges {
          node {
            id
            title
            description
            createdAt
            slug
            image {
              url
            }
            creator {
              username
            }
          }
        }
      }
    }
  `;

  const result = await request<PostsConnection>(hygraphAPI, query, {
    skip,
    limit,
  });

  return result.postsConnection.edges;
};
