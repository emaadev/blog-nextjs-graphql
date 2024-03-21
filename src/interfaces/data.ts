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
