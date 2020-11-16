
import { gql } from 'apollo-server';

export default gql`

type Article {
    title: String
    categories: [String]
    sections: [Section]
  }

  type Section {
    indentLevel: Int
    title: String
    id: String
  }

  type Query {
    """
    Get An Article By Its Name. 
    """
    article(page: String): Article
  }
`;