export const categoryTypeDefs = `#graphql
    type Category {
        id: ID!
        name: String!
        posts: [Post!]!
    }

    type CategoryResult {
        items: [Category!]!
        total: Int!
        hasNext: Boolean!
    }

    type SingleCategoryResponse {
        items: [Category!]!
    }

    type Query {
        categories(page: Int!, limit:Int!): CategoryResult!
        category(id: ID!): SingleCategoryResponse!
    }
`;
