
interface Article {
    title: string;
    text: string;
    templates: string[];
    sections: Section[];
    revid: number;
    parsewarnings: string[];
    links: Link[];
    langlinks: string[];
    iwlinks: string[];
    images: string[];
    externallinks: string[];
    pageid: number;
    displaytitle: string;
    categories: Category[];
}

interface Category {
    sortkey: string;
    category: string;
    hidden?: boolean;
}

interface Link {
    title: string;
    ns: number;
    exists: boolean;
}

interface Section {
    toclevel: number;
    level: string;
    line: string;
    number: string;
    index: string;
    fromtitle: string;
    byteoffset: number,
    anchor: string;
}
