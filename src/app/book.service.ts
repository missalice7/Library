import { Injectable, OnDestroy } from '@angular/core';
import { Book, RawBook, ServerBook } from './types';
import { extractId, getRawAuthor, getDescription, getPublishDate } from './helpers/';
import { Subscription } from 'rxjs';
import { SearchAuthorService } from './search-author.service';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class BookService implements OnDestroy {
  private bookCache: Map<Book['id'], Book> = new Map();

  author = 'tolkien';
  newAuthor: string;
  subscription: Subscription;

  constructor(
    private searchService: SearchAuthorService,
    private localStorageService: LocalStorageService) {

    this.subscription = this.searchService.getAuthor().subscribe(newAuthor => {
      if (newAuthor) {
        this.author = newAuthor;
      } else {
        this.newAuthor = 'Not Working';
      }
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  serverToBook(serverBook: ServerBook): Book {

  return {
    id: serverBook.id,
    title: serverBook.title
  };
}


rawToBook(rawBook: RawBook): Book{

  const bookID = extractId(rawBook.key);
  const description: string = getDescription(rawBook.description);
  const publishDate: string = getPublishDate(rawBook.publish_date);
  let authors: string;

  if (rawBook.authors === undefined){
    authors = getRawAuthor(rawBook.contributors);
  }
  if (rawBook.contributors === undefined){
    authors = getRawAuthor(rawBook.authors);
  }

  return {
    id: bookID,
    title: rawBook.title,
    authors,
    cover: rawBook.cover,
    description,
    publish_date: publishDate
  };
}


async getAllBooks(): Promise<Book[]> {

    await fetch(this.author = this.localStorageService.checkLocalStorage());

    if (this.author === undefined){
      this.author = 'tolkien';
    }

    const booksResponse = await fetch(`https://gnm-book-class.herokuapp.com/search?author=${this.author}&timeout=10000`);
    const serverBooks = (await booksResponse.json()).docs as ServerBook[];
    const books = serverBooks.map((book) => this.serverToBook(book));

    this.bookCache = new Map(books.map((book) => [book.id, book]));

    return Array.from(this.bookCache.values());
  }


async getBook(id: Book['id']): Promise<Book> {

    if (this.bookCache.has(id)) {
      this.bookCache.get(id);
    }

    const booksResponse = await fetch(`https://gnm-book-class.herokuapp.com/books?id=${id}&format=json&jscmd=details`);
    const rawBook = (await booksResponse.json()).details as RawBook;
    const book = this.rawToBook(rawBook);

    this.bookCache.set(book.id, book);

    return book;
  }
}
