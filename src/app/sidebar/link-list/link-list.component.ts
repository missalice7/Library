import { Component, OnInit } from '@angular/core';
import { BooksService } from './../../books.service';
import { Book } from './../../types';

interface Links {
  label: string;
  href: string;
}

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})



export class LinkListComponent implements OnInit {

  links: Links[];

  constructor(private bookService: BooksService) { }


  ngOnInit(): void {

    this.links = this.bookService.getAllBooks()
    .map((book) => {
      return {
        label: book.title,
        href: `/recipes/${book.id}`
      };
    });
  }

}
