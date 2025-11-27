import { COMMENTS } from '@/data/comments.js';
import { POSTS } from '@/data/posts.js';
import { USERS } from '@/data/users.js';
import { CATEGORIES } from '@/data/categories.js';

const Posts = {
  Query: {
    posts: (_, { limit = 25, page = 1 }) => {
      const start = (page - 1) * limit;
      const end = start + limit;
      return {
        hasNext: end < POSTS.length,
        total: POSTS.length,
        items: POSTS.slice(start, end),
      };
    },
    post: (_, { id }) => {
      const post = POSTS.find((post) => post.id === id);
      return {
        items: post ? [post] : [],
      };
    },
  },
  Post: {
    user: (parent) => USERS.find((user) => user.id === parent.userId),
    comments: (parent) => COMMENTS.filter((comment) => comment.postId === parent.id),
    category: (parent) => CATEGORIES.find((category) => category.id === parent.categoryId),
  },
};

export default Posts;
