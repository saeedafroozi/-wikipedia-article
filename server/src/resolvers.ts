
import { searchArticle } from "./wikipediaApi";
import { mapper } from './utils/mapper'

export default {
  Query: {
    article: async (parent: unknown, { page }: { page: string }): Promise<ArticleViewModel | ErrorResponse | null> => {
      const response = await searchArticle(page);
      if ((response as ErrorResponse).error) {
        return null;//I tried to return the ErrorResponse Object To Client
      }
      else {
        return mapper((response as ServerResponse<Article>).parse);
      }
    }
  },
};