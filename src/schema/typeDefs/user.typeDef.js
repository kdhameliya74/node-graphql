export const userTypeDefs = `#graphql
    type User {
        id: ID!
        name: String
        email: String
        createdAt: String
        profile: Profile
        comments: [Comment!]!
        posts: [Post!]!
    }

    type Profile {
        id: ID!
        userId: ID!
        bio: String
        age: Int
    }

    type UserResult {
        items: [User!]!
        total: Int!
        hasNext: Boolean!
    }

    type SingleUserResponse {
        items: [User!]!
    }

    type Query {
        users(page: Int!,limit:Int!): UserResult!
        user(id: ID!): SingleUserResponse!
    }
`;
