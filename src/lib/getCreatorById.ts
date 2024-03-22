import { request, gql } from "graphql-request";

import { Creator } from "@/interfaces/data";

// If the MASTER READ/WRITE endpoint is not available,
// then use the PUBLIC ONLY READ endpoint
const hygraphAPI =
  process.env.HYGRAPH_MASTER_ENDPOINT ||
  "https://sa-east-1.cdn.hygraph.com/content/cltyc5f86014a07w6j2qnu40l/master";

export const getCreatorById = async (id: string): Promise<Creator | null> => {
  const query = gql`
    query CreatorById($id: ID!) {
      creator(where: { id: $id }) {
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
          slug
        }
      }
    }
  `;

  const result = await request<{ creator: Creator }>(hygraphAPI, query, { id });

  return result.creator;
};
