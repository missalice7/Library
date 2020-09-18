import { Injectable } from '@angular/core';
import { Book, RawBook, ServerBook } from './types';
import { extractId, getRawAuthor } from './helpers/';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookCache: Map<Book['id'], Book> = new Map();

  constructor() { }

serverToBook(serverBook: ServerBook): Book {


  return {
    id: serverBook.id,
    title: serverBook.title,
    authors: serverBook.author_name,
    cover: `http://covers.openlibrary.org/b/OLID/${serverBook.id}-M.jpg`
  };
}

rawToBook(rawBook: RawBook): Book{

    const bookID = extractId(rawBook.key);

    if (rawBook.authors === undefined){
      const authors: string = getRawAuthor(rawBook.contributors);
      return {
        id: bookID,
        title: rawBook.title,
        authors,
        cover: rawBook.cover,
      };
    }

    else{
      const authors: string = getRawAuthor(rawBook.authors);
      return {
        id: bookID,
        title: rawBook.title,
        authors,
        cover: rawBook.cover,
      };
    }

}


  async getAllBooks(): Promise<Book[]> {
    const booksResponse = await fetch('https://gnm-book-class.herokuapp.com/search?author=tolkien');
    const serverBooks = (await booksResponse.json()).docs as ServerBook[];
    const books = serverBooks.map((book) => this.serverToBook(book));

    this.bookCache = new Map(books.map((book) => [book.id, book]));

    return Array.from(this.bookCache.values());
  }


  async getBook(id: Book['id']): Promise<Book> {

    if (this.bookCache.has(id)) {
      this.bookCache.get(id);
    }

    console.log(this.bookCache);
    const booksResponse = await fetch(`https://gnm-book-class.herokuapp.com/books?id=${id}&format=json&jscmd=details`);
    const rawBook = (await booksResponse.json()).details as RawBook;
    const book = this.rawToBook(rawBook);

    this.bookCache.set(book.id, book);

    return book;
  }
}
