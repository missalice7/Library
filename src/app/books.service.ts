import { Injectable } from '@angular/core';
import { Book } from './types';

const booksDictionary: Book[] = [
  {
    id: '45646546',
    title: 'Harry Potter',
    author: 'Rowling',
  },
  {
    id: '45646546',
    title: 'Lord of The Rings',
    author: 'Tolkien',
  },
  {
    id: '45646546',
    title: 'Two Towers',
    author: 'Tolkien'
  }
];


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAllBooks(): Book[] {
    return Object.values(booksDictionary);
  }
}
