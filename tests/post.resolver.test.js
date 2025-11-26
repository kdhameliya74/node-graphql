import { makeExecutableSchema } from "@graphql-tools/schema";
import Posts from "../src/schema/resolvers/post.resolver.js";
import typeDefs from "../src/schema/typeDefs/index.js";
import { graphql } from "graphql";

jest.mock("../src/data/posts.js", () => ({
  POSTS: [
    {
      id: 1,
      userId: 1,
      title: "Mock Post 1",
      content: "Content for post 1",
      createdAt: "2025-10-24T16:55:54.630216Z",
      categoryId: 1,
    },
    {
      id: 2,
      title: "Mock Post 2",
      userId: 2,
      categoryId: 2,
      content: "Content for post 2",
      createdAt: "2025-10-24T16:55:54.630216Z",
    },
  ],
}));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: { Query: Posts.Query },
});

describe("posts resolver", () => {
  it("returns paginated posts with total", async () => {
    const query = `
      query {
        posts(limit: 2, page: 1) {
          total
          items { id title }
        }
      }
    `;
    const result = await graphql({ schema, source: query });
    expect(result.data.posts.total).toBe(2);
    expect(result.data.posts.items.length).toBe(2);
    expect(result.data.posts.items[0].title).toBe("Mock Post 1");
  });
});
