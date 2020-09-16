import { Injectable } from '@angular/core';
import { Book } from './types';

const BOOKS: {
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
};


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
