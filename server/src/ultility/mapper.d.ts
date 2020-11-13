import { splitChar } from '../constant'

export function mapper(response: Article): ArticleViewModel {
    return {
        categories: response.categories.filter(c => !c.hidden).map(c => c.category),
        title: response.displaytitle,
        sections: response.sections.map(section => ({
            id: section.number,
            level: +section.level,
            title: section.line,
            hierarchy: section.number.split(splitChar)
        })),
        externallinks: response.externallinks
    };
}