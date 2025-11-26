import { buildSchema } from "graphql";
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from "../src/schema/typeDefs/index.js";

describe("GraphQL typeDefs", () => {
  it("should build schema without errors", () => {
     expect(() => {
      makeExecutableSchema({ typeDefs });
    }).not.toThrow();
  });
});
