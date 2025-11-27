// Entry Point
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} from '@apollo/server/plugin/landingPage/default';

// Type Definitions
import typeDefs from '@/schema/typeDefs';
// Resolvers
import resolvers from '@/schema/resolvers';

const dev = process.env.NODE_ENV !== 'production';
const PORT = 8080;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // enable introspection in all environments for learning/demo purposes
  plugins: [
    dev
      ? ApolloServerPluginLandingPageLocalDefault()
      : ApolloServerPluginLandingPageProductionDefault({
          embed: true, // shows embedded Apollo Sandbox UI
        }),
  ],
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀  Server ready at: ${url}`);
