import * as express from 'express';
import { getSchema } from './graphql/schema';
import { ApolloServer } from 'apollo-server-express';

const main = async () => {
  const app = express();
  const schema = getSchema;
  const apolloServer = new ApolloServer({
    schema,
  });
  const port = process.env.port || 3333;

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to api!' });
  });
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
    console.log(`GraphQL  at http://localhost:${port}/graphql`);
  });
  server.on('error', console.error);
};

main();
