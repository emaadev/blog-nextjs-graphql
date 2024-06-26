// Interface for the main structure of the post
export interface Post {
  slug: string;
  createdAt: string;
  description: string;
  id: string;
  publicationDate: string;
  creator: {
    id: string;
    name: string;
    username: string;
    profileImage: {
      url: string;
    };
    posts: {
      id: string;
      title: string;
      description: string;
      image: {
        url: string;
      };
    }[];
  };
  title: string;
  textContent: {
    html: string;
  };
  image: {
    url: string;
  };
  featuredPost: boolean;
}

// Interface for the first fetched data from CMS
export interface PostNode {
  node: Post;
} 

// Interface for PostList Pagination
export interface PaginatedPost {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  slug: string;
  image: {
    url: string;
  };
  creator: {
    username: string;
  };
}

// Interface for each Creator
export interface Creator {
  id: string;
  name: string;
  username: string;
  profileImage: {
    url: string;
  };
  posts: {
    id: string;
    title: string;
    description: string;
    image: {
      url: string;
    };
    slug: string;
  };
}