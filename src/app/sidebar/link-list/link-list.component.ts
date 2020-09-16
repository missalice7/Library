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


  async ngOnInit(): Promise<void> {
    this.links = [{
      href: '',
      label: 'Lorem Ipsum...'
    }, {
      href: '',
      label: 'Lorem Ipsum...',
    }];

    const books = await this.bookService.getAllBooks();
    this.links = books.map(book => {
      return {
        label: book.title,
        href: `/book/${book.id}`
      };
    });
  }

}
