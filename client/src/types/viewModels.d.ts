
interface SectionViewModel {
  id: string;
  title: string;
  indentLevel: number;
}

interface GraphqlArticleViewModel {
  article: ArticleViewModel | null;
}

interface ArticleViewModel {
  title: string;
  categories: string[];
  sections: SectionViewModel[];
}

