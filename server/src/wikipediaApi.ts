
import { fetch } from './fetch';
import { StringDictionary } from './utils/constants'

export function searchArticle(page: string) {
  return new Promise<ServerResponse<Article> | ErrorResponse>((resolve, reject) => {
    fetch<ServerResponse<Article> | ErrorResponse>(`${StringDictionary.baseUrl}&page=${page}`)
      .then(resolve)
      .catch(reject)
  });
}