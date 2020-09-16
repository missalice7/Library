import { Injectable } from '@angular/core';
import { Book } from './types';

const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Harry Potter',
    author: 'Rowling',
  },
  {
    id: '2',
    title: 'Lord of The Rings',
    author: 'Tolkien',
  },
  {
    id: '3',
    title: 'Two Towers',
    author: 'Tolkien'
  }
];


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAllBooks(): Book[] {
    return Object.values(BOOKS);
  }

  getBook(id: string): Book {
    return BOOKS[id];
  }

}
