
export function mapper(response: Article): ArticleViewModel {
  return {
    categories: response.categories.filter(c => !c.hidden).map(c => c.category),
    title: response.displaytitle,
    sections: response.sections.map(section => ({
      id: section.number,
      title: section.line,
      indentLevel: section.toclevel,
    })),
  };
}