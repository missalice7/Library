import { Injectable } from '@angular/core';
import { Book } from './types';
import { extractId } from '../app/helpers/extract-id';



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




@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookCache: Map<Book['id'], Book> = new Map();

  constructor() { }

  toServerBook(serverBook: ServerBook): Book {

      return {
        id: serverBook.id,
        title: serverBook.title,
        authors: serverBook.author_name,
        cover: serverBook.cover
      };
    }

  toRawBook(book: RawBook): Book{

    const bookID = extractId(book.key);
    console.log (bookID);

    return {
      id: bookID,
      title: book.title,
      authors: book.authors[0],
      cover: book.cover
    };
  }


  async getAllBooks(): Promise<Book[]> {
    const booksResponse = await fetch('https://m24eh.sse.codesandbox.io/search?author=tolkien');
    const serverBooks = (await booksResponse.json()).docs as ServerBook[];
    const books = serverBooks.map((book) => this.toServerBook(book));

    this.bookCache = new Map(books.map((book) => [book.id, book]));

    return Array.from(this.bookCache.values());
  }

  // SEPARATE

  async getBook(id: Book['id']): Promise<Book> {
    if (this.bookCache.has(id)) {
      return this.bookCache.get(id);
    }

    const booksResponse = await fetch(`https://m24eh.sse.codesandbox.io/books?id=${id}&format=json&jscmd=details`);
    const serverBook = (await booksResponse.json()).details as RawBook;
    const book = this.toRawBook(serverBook);

    console.log(serverBook);
    console.log (book);

    this.bookCache.set(book.id, book);

    return book;
  }
}
