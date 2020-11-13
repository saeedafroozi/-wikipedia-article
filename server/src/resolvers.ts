
import { searchArticle } from "./wikipediaSearchApi";
import { mapper } from './ultility/mapper'

export default {
    Query: {
        article: async (parent: unknown, { page }: { page: string }): Promise<ArticleViewModel> => {

            try {
                const response = await searchArticle(page);
                return mapper(response.parse as Article);

            }
            catch (error) {
                return error;
            }

        }
    },
};