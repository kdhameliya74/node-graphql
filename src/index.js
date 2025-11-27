// Entry Point
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Type Definitions
import typeDefs from '@/schema/typeDefs';
// Resolvers
import resolvers from '@/schema/resolvers';

const PORT = 8080;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀  Server ready at: ${url}`);
