import {ApolloServer,gql} from  'apollo-server'




const typeDefs=gql`
type Article   {
    title:String
}
 type Query {
     articles:[Article]
 }
`;

const articles = [
    {
      title: 'The Awakening',
    },
    {
      title: 'City of Glass',
    },
  ];

  const resolvers ={
      Query:{
          articles:()=>articles
      },
  }

  const server= new ApolloServer({typeDefs,resolvers});

  server.listen(4001).then(({url})=>{
      console.log(`Server ready at ${url}`)
  })