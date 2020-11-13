
import { gql } from 'apollo-server';

export default gql`

type Article {
    title: String
    categories: [String]
    sections: [Section]
    externallinks: [String]
  }

  type Section {
    level: Int
    title: String
    id: String
    hierarchy: [String]
  }

  type Query {
    """
    Get An Article By Its Name. 
    """
    article(page: String): Article
  }
`;