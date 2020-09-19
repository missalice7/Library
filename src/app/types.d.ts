import {Author, Contributors} from './helpers';

interface Book {
    id: string;
    title: string;
    authors?: string | string[];
    cover?: string;
    description?: string;
    publish_date?: string;
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
    authors: Author[];
    contributors?: Contributors[]
    cover: string;
    description: string;
    publish_date: string;
}

export {
    Book,
    ServerBook,
    RawBook,
}
  