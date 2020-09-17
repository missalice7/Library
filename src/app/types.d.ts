interface Book {
    id: string,
    title: string,
    authors: string | string[],
    cover: string
}

interface ServerBook {
    id: string;
    title: string;
    author_name: string | string[];
    cover: string;
}
  
interface RawBook {
    key: string;
    title: string;
    authors: string | string[];
    cover: string;
}

export {
    Book,
    ServerBook,
    RawBook
}
  