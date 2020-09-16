import { Injectable } from '@angular/core';
import { Book } from './types';

/* const BOOKS: {
  [key: string]: Book
} = {
  one: {
    id: 'one',
    title: 'Harry Potter',
    author: 'Rowling',
  },
  two: {
    id: 'two',
    title: 'Lord of The Rings',
    author: 'Tolkien',
  },
  three: {
    id: 'three',
    title: 'Two Towers',
    author: 'Tolkien'
  }
}; */


interface ServerBook {
  id: string;
  title: string;
  author_name: string | string[];
}



@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookCache: Map<Book['id'], Book> = new Map();

  constructor() { }

  private toBook(serverBook: ServerBook): Book {

    return {
      id: serverBook.id,
      title: serverBook.title,
      author: serverBook.author_name
    };
  }


  async getAllBooks(): Promise<Book[]> {
    const booksResponse = await fetch('https://m24eh.sse.codesandbox.io/search?author=tolkien');
    const serverBooks = (await booksResponse.json()).docs as ServerBook[];
    const books = serverBooks.map((book) => this.toBook(book));

    this.bookCache = new Map(books.map((book) => [book.id, book]));

    return Array.from(this.bookCache.values());
  }

  async getBook(id: Book['id']): Promise<Book> {
    if (this.bookCache.has(id)) {
      return this.bookCache.get(id);
    }

    const booksResponse = await fetch(`https://m24eh.sse.codesandbox.io/books?id=${id}&format=json&jscmd=detail`);
    const serverBook = (await booksResponse.json()) as ServerBook;
    const book = this.toBook(serverBook);

    this.bookCache.set(book.id, book);

    return book;
  }

  /* getAllBooks(): Book[] {
    return Object.values(BOOKS);
  } */

  /* getBook(id: string): Book {
    return BOOKS[id];
  } */

}
