import { userTypeDefs } from '@/schema/typeDefs/user.typeDef.js';
import { postTypeDefs } from '@/schema/typeDefs/post.typeDef.js';
import { commentTypeDefs } from '@/schema/typeDefs/comment.typeDef.js';
import { categoryTypeDefs } from '@/schema/typeDefs/category.typeDef.js';

const typeDefs = [userTypeDefs, postTypeDefs, commentTypeDefs, categoryTypeDefs];

export default typeDefs;
