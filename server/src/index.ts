import { ApolloServer, gql } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './graphSchema/schema'


const server = new ApolloServer({
  resolvers,
  typeDefs
});

server.listen(5000)
  .then(({ url }) => console.log(`Server ready at ${url}. `));

// Hot Module;I Read in An Article to Setup Apollo Server
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed. '));
}