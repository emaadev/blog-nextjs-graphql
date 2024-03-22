# Project Documentation: Next.js Blog with Hygraph CMS for INE 

## Introduction

Thank you for taking the time to evaluate my technical challenge submission. This project is a reflection of my dedication to creating modern, efficient, and user-friendly web applications. Leveraging the power of Next.js and the flexibility of Hygraph CMS, I have developed a blog platform that not only showcases my technical skills but also demonstrates my commitment to following best practices in web development.

The application is designed with a focus on performance, scalability, and ease of use, ensuring a seamless experience for both the end-users and the developers. I have paid close attention to detail in every aspect of the project, from the code structure and component design to the choice of technologies and deployment strategies.

I am confident that this project will provide a comprehensive understanding of my capabilities as a web developer and my ability to deliver high-quality solutions. I look forward to your feedback and am eager to discuss any aspects of the application in further detail.

## Overview

This documentation provides an overview and setup guide for a blog application built with Next.js and powered by Hygraph CMS. The application features dynamic rendering of blog posts, server-side rendering for SEO optimization, and a modern, responsive design.

- [Link to website](https://ine-blog.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Development](#project-development)
- [Configuring Hygraph](#configuring-hygraph)
  - [Setting Up the Schema](#setting-up-the-schema)
  - [Fetching Data](#fetching-data)
- [Deployment](#deployment)
- [Contact Me](#contact-me-for-any-questions)

## Technologies Used

- TypeScript
- Next.js
- React
- GraphQL (GraphQL Request)
- Hygraph CMS
- Framer Motion

## Getting Started

### Prerequisites

- Node.js
- npm, yarn, pnpm or bun

### Installation

1. Clone the repository:
```
git clone https://github.com/emaadev/blog-nextjs-graphql.git
```
2. Navigate to the project directory:
```
cd your-blog-repo
```
3. Install dependencies:
```
npm install
```
4.  Set up environment variables: Create a `.env.local` file and  add your Hygraph API endpoint:
```javascript
HYGRAPH_MASTER_ENDPOINT=<your-master-hygraph-api-endpoint>
// or
HYGRAPH_PUBLIC_ENDPOINT=https://sa-east-1.cdn.hygraph.com/content/cltyc5f86014a07w6j2qnu40l/master
```
5. Run the code
```
npm run dev
```

### Notes:
- This public endpoint is already configured in the application but you can find your API KEY in the [Hygraph Docs](https://hygraph.com/docs/api-reference/basics/authorization). 
- Make sure you have added the `.env.local` to the `.gitignore` file before you commit the code.


# Project Development
## Key Implementations

This project showcases several notable achievements in web development using Next.js and Hygraph CMS. Here are some of the key features and functionalities implemented:

### 1. **Static Generation with `getStaticProps`:**

-   Utilized `getStaticProps` to fetch blog post data at build time, resulting in faster page loads and improved SEO.

### 2. **Dynamic Routing with `getStaticPaths`:**

-   Implemented `getStaticPaths` to generate static pages for each blog post using dynamic routes, enabling efficient navigation and access to individual posts.

### 3. **Infinite Scrolling:**

-   Developed an infinite scrolling feature to load more posts as the user scrolls down the page, enhancing user experience and engagement.

### 4. **Search Functionality:**

-   Created a search bar component that allows users to search for blog posts by title, ensuring quick and easy access to relevant content.

### 5. **Author Information and Profiles:**

-   Stored and displayed author information for each post, including a profile image, username, and real name.
-   TODO: A dedicated author page that showcases personal information and lists all posts created by the author, providing a comprehensive view of their contributions.

### 6. **Responsive Design:**

-   Ensured that the application is fully responsive and provides an optimal viewing experience across various devices and screen sizes.

### 7. **Deployment:**

-   Successfully deployed the application to a hosting platform, making it accessible to a wider audience.
 
### 8. **Seamless Page Transitions with Framer Motion:**

-   Integrated Framer Motion to achieve smooth and seamless transitions between pages and routes, providing a more cohesive and uninterrupted user experience.

### 9. **Featured Posts Section:**

-   Implemented a dedicated section for featured posts, where recent or highlighted posts are marked with a special indicator to signify their recency or importance.

## Git Environment
- main (production)
    - develop (development)
    
For the development of the application, I used two main branches: 'Main' and 'Develop'. In the 'Develop' branch, I perform all the testing and development of new features. Once the code is clean and error-free, I use the 'git switch' command to change to the 'Main' branch and then perform a 'merge' to incorporate all the changes from the 'Develop' branch. This allows me to maintain an organized workflow and ensure that the 'Main' branch always contains a stable version of the project.

## Main Structure:
- `src/`: Contains the Next.js main files (`src directory`).
	- `pages/`: Contains the Next.js pages (e.g., `index.js`, `post/[slug].js`).
	- `components/`: Contains reusable React components (e.g., `Header.js`, `Footer.js`).
	- `interfaces/`: Contains reusable Interfaces for TypeScript.
	- `styles/`: Contains CSS and CSS Modules.
	- `lib/`: Contains utility functions for fetching data from Hygraph and useful reusable functions.
- `.env.local`: Here is your `.env.local` file.
- `public/`: Images and Icons folder.

```typescript
- src/
  - components/
    - FeaturedPosts.tsx: 					// Display featured posts.
    - Layout.tsx: 							// Contains the transitions config for the App.
    - PostList.tsx: 						// Component to list all the posts.
    
    - shared/								// Shared Components along the App
      - PostCard.tsx: 						// Display a post card.
      - SectionTitle.tsx: 					// Component for the title of a section.
      - TopicPost.tsx: 						// Component to display a post on a specific topic.

  - interfaces/
    - data.ts: 								// File to define interfaces or data types.
 
  - lib/
    - getAllPostsBySlugs.ts: 				// Function to fetch all posts by slugs.
    - getPaginatedPosts.ts: 				// Function to fetch paginated posts.
    - getPostBySlug.ts: 					// Function to fetch a post by its slug.
    - getPosts.ts: 							// Function to fetch all posts.
    - getRelativeTime.ts: 					// Function to fetch the relative time of a post.

  - pages/
    - index.tsx: 							// Main page of the application.
    - post/
      - [slug].tsx: 						// Dynamic page to display an individual post.
  - styles/									// Styles
    - FeaturedPosts.module.css
    - Hero.module.css
    - PostCard.module.css
    - PostList.module.css 
    - PostPage.module.css 
    - SearchBar.module.css 
    - globals.css
```
### Notes:
- Why I fetch all the slugs while fetching one?
The application retrieves all available slugs to pre-generate the pages associated with each slug. This approach enables efficient server-side rendering, as the server can serve pre-rendered HTML for each page. By doing this, the application optimizes SEO by ensuring that search engines can easily crawl and index each page. Additionally, it improves performance by reducing the time to first contentful paint, enhancing the user experience.

## Explanation:
This section provides a comprehensive overview of how the blog application operates, from fetching data to rendering components.

### Configuring Hygraph
Although this time, it is not necessary to design a schema to display posts in a blog because it is already designed, it is important to know how the hygraph CMS is managed, I will give an introduction of how you should create a schema in hygraph, this way you will better understand how the project is structured within this CMS and then do a data fetching and get what is appropriate.

### Setting Up the Schema

1. Create a new content model for blog posts with fields like `title`, `slug`, `content`, and `date`.
2. Populate your content model with some sample blog posts.

### Fetching Data

```typescript
import { request, gql } from  "graphql-request";

// Your local environment variable
const  hygraphAPI = process.env.HYGRAPH_MASTER_ENDPOINT

interface  PostsConnection {
	postsConnection: {
		edges: {
			node: Post;
		};
	};
}

export  const  getPosts  =  async () => {
	const  query  =  gql`
		query GetPosts { 
			postsConnection {
				edges {
					node {
						title 
						slug 
						content 
						date 
					}
				}
			}  
		}
	`;
	
const result = await request<PostsConnection>(hygraphAPI, query);

return result.postsConnection.edges;
};
```


### Rendering Components

Once the data is fetched, it is passed through components using getStaticProps, and it is one of the more important reasons why I prefer to use Pages Router instead of App Router. 

```typescript
// src/pages/index.tsx
import { GetStaticProps } from 'next';
import { getPosts } from '../lib/getPosts';
import Home from '../components/Home';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return <PostList posts={posts} />;
}

```

Now, I can filter the `featuredPost` boolean value of each post and passed it to the correct component:
```typescript
export  default  function  Home({ posts }: HomeProps) {
const  featuredPosts  =  posts.filter(
	(post: any) =>  post.node.featuredPost  ===  true
);

return (
<main className={montserrat.className}>
	<FeaturedPosts data={featuredPosts} />
</main>
);
}
```
### Styling and Layout

The application uses CSS modules for styling individual components. The styles are scoped to each component, ensuring that there are no conflicts between different parts of the application.

```css 
`/* styles/PostsComponent.module.css */
.postsList {
  list-style-type: none;
  padding: 0;
}

.postItem {
  margin-bottom: 20px;
}` 
```

### Deployment

The blog application is deployed using Vercel, which provides automatic deployments for Next.js applications. The deployment process involves pushing the code to a GitHub repository and connecting it to Vercel, which handles the rest.

## Contact Me For Any Questions
- [Portoflio](https://emanuel-nunez.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/emanuelnunez/)

### Thanks for watching!