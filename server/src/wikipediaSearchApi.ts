
import { fetch } from './fetch';
import { baseUrl } from './constants'

export function searchArticle(page: string) {
    return new Promise<ServerRespone<Article>>((resolve, reject) => {
        fetch<ServerRespone<Article>>(`${baseUrl}&page=${page}`).then((result) => {
            resolve(result)
        })
            .catch((ex) => {
                const error: ErrorResponse =
                {
                    number: "500",
                    message: ex.message
                };
                reject(error)
            })
    });
}