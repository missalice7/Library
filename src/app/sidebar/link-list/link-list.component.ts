import { Component, OnInit } from '@angular/core';
import { Book } from './types';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  constructor() { }

  books: Book[] = [
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

  ngOnInit(): void {
  }

}
