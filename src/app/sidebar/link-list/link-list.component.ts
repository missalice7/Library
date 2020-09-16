import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
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

  constructor(private bookService: BookService) { }


  ngOnInit(): void {

    this.links = this.bookService.getAllBooks()
    .map((book) => {
      return {
        label: book.title,
        href: `/book/${book.id}`
      };
    });
  }

}
