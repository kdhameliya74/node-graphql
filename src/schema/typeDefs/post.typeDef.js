export const postTypeDefs = `#graphql
    type Post {
        id: ID!
        categoryId: ID
        userId: ID!
        content: String!
        title: String!
        createdAt: String!
        user: User
        comments: [Comment!]!
        category: Category
    }

    type PostResult {
        items: [Post!]!
        total: Int!
        hasNext: Boolean!
    }

    type SinglePostResponse {
        items: [Post!]!
    }

    type Query {
        posts(page: Int!, limit: Int!): PostResult!
        post(id: ID!): SinglePostResponse!
    }
`;
