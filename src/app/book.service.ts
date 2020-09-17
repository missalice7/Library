import { Injectable } from '@angular/core';
import { Book, ServerBook, RawBook } from './types';
import { extractId } from '../app/helpers/extract-id';







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

  toRawBook(rawBook: RawBook): Book{

    const bookID = extractId(rawBook.key);

    return {
      id: bookID,
      title: rawBook.title,
      authors: rawBook.authors[0],
      cover: rawBook.cover
    };
  }


  async getAllBooks(): Promise<Book[]> {
    const booksResponse = await fetch('https://m24eh.sse.codesandbox.io/search?author=tolkien');
    const serverBooks = (await booksResponse.json()).docs as ServerBook[];
    const books = serverBooks.map((book) => this.toServerBook(book));

    this.bookCache = new Map(books.map((book) => [book.id, book]));

    return Array.from(this.bookCache.values());
  }


  async getBook(id: Book['id']): Promise<Book> {
    if (this.bookCache.has(id)) {
      return this.bookCache.get(id);
    }

    const booksResponse = await fetch(`https://m24eh.sse.codesandbox.io/books?id=${id}&format=json&jscmd=details`);
    const rawBook = (await booksResponse.json()).details as RawBook;
    const book = this.toRawBook(rawBook);

    // console.log(rawBook);
    console.log (book);

    this.bookCache.set(book.id, book);

    return book;
  }
}
