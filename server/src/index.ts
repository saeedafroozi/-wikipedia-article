import { ApolloServer, gql } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './schema/query'


const server = new ApolloServer({
    resolvers,
    typeDefs
});

server.listen(5000)
    .then(({ url }) => console.log(`Server ready at ${url}. `));