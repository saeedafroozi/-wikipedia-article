interface SectionViewModel {
    level: number;
    title: string;
    id: string;
    hierarchy: string[];
  }
  
  interface ArticleViewModel {
    title: string;
    categories: string[];
    sections: SectionViewModel[];
    externallinks: string[];
  }