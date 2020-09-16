import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from './../../types';
import { BookService } from './../../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  activeBook: Book;

  constructor(private route: ActivatedRoute, private service: BookService) { }

  async ngOnInit(): Promise<void> {

    this.route.paramMap.subscribe((paramMap) => {
      const name = paramMap.get('bookId');

      // this.activeBook = this.service.getBook(name);
    });
  }

}
