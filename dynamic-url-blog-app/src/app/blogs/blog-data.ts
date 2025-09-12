export interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  author: string;
}

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: 'First Blog Post',
    image: 'https://via.placeholder.com/300x150',
    description: 'This is the first blog description. It is a little long so we will trim it...',
    author: 'Alice'
  },
  {
    id: 2,
    title: 'Second Blog Post',
    image: 'https://via.placeholder.com/300x150',
    description: 'Second blog description with more content for demo purpose...',
    author: 'Bob'
  },
  {
    id: 3,
    title: 'Third Blog Post',
    image: 'https://via.placeholder.com/300x150',
    description: 'Another blog description for testing dynamic URLs in Angular...',
    author: 'Charlie'
  }
];
