import { USERS } from '@/data/users.js';
import { PROFILES } from '@/data/profiles.js';
import { COMMENTS } from '@/data/comments.js';
import { POSTS } from '@/data/posts.js';

const Users = {
  Query: {
    users: (_, { page = 1, limit = 25 }) => {
      const start = (page - 1) * limit;
      const end = start + limit;
      return {
        items: USERS.slice(start, end),
        total: USERS.length,
        hasNext: end < USERS.length,
      };
    },
    user: (_, { id }) => {
      const user = USERS.find((user) => user.id === id);
      return {
        items: user ? [user] : [],
      };
    },
  },
  User: {
    profile: (parent) => PROFILES.find((profile) => profile.userId === parent.id) || null,
    comments: (parent) => COMMENTS.filter((comment) => comment.userId === parseInt(parent.id)),
    posts: (parent) => POSTS.filter((post) => post.userId === parseInt(parent.id)),
  },
};

export default Users;
