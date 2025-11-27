import Users from '@/schema/resolvers/user.resolver.js';
import Posts from '@/schema/resolvers/post.resolver.js';
import Comments from '@/schema/resolvers/comment.resolver.js';
import Categories from '@/schema/resolvers/category.resolver.js';
const resolvers = {
  Query: {
    ...Users.Query,
    ...Posts.Query,
    ...Comments.Query,
    ...Categories.Query,
  },

  User: {
    ...(Users.User || {}),
  },

  Post: {
    ...(Posts.Post || {}),
  },

  Comment: {
    ...(Comments.Comment || {}),
  },

  Category: {
    ...(Categories.Category || {}),
  },
};

export default resolvers;
