import { COMMENTS } from '@/data/comments.js';

const Comments = {
    Query: {
        comments: () => COMMENTS,
        comment: (_, { id }) => COMMENTS.find(comment => comment.id === id) || null,
    },
}
export default Comments;