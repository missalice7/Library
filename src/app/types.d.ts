interface Book {
    id: string,
    title: string,
    authors: string,
    cover: string
}

interface Author {
    name: string;
    key: string;
}

interface ServerBook {
    id: string;
    title: string;
    author_name: [string];
    cover: string;
}
  
  interface RawBook {
    key: string;
    title: string;
    authors: [Author];
    cover: string;
}

export {
    Book,
    ServerBook,
    RawBook,
    Author
}
  