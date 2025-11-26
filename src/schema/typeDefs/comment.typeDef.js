export const commentTypeDefs = `#graphql
    type Comment {
        id: ID!
        userId: ID!
        postId: ID!
        text: String
        createdAt: String
    }
    type Query {
        comments: [Comment!]!
        comment(id: ID!): Comment
    }
`