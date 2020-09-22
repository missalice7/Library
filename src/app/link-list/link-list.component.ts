import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

interface Links {
  label: string;
  href: string;
}

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: [
    './link-list.component.css',
    './loading.component.css'
  ]
})



export class LinkListComponent implements OnInit {

  links: Links[];
  loader: string;

  constructor(private bookService: BookService) { }


  async ngOnInit(): Promise<void> {

    this.loader = 'lds-ellipsis';

    const books = await this.bookService.getAllBooks();
    this.loader = 'lds-ellipsis-none';
    this.links = books.map(book => {
      return {
        label: book.title,
        href: `/book/${book.id}`
      };
    });
  }

}
