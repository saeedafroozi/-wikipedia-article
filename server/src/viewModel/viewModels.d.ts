
interface ArticleViewModel {
  title: string;
  categories: string[];
  sections: SectionViewModel[];
}

interface SectionViewModel {
  title: string;
  id: string;
  indentLevel: number;
}