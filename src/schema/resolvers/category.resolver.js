import { CATEGORIES } from '@/data/categories.js';
import { POSTS } from '@/data/posts.js';

const Category = {
  Query: {
    categories: (_, { limit = 25, page = 1 }) => {
      const start = (page - 1) * limit;
      const end = start + limit;
      return {
        items: CATEGORIES.slice(start, end),
        total: CATEGORIES.length,
        hasNext: end < CATEGORIES.length,
      };
    },
    category: (_, { id }) => {
      const category = CATEGORIES.find((category) => category.id === parseInt(id));
      return {
        items: category ? [category] : [],
      };
    },
  },
  Category: {
    posts: (parent) => POSTS.filter((post) => post.categoryId === parent.id),
  },
};

export default Category;
