import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from './../types';
import { BookService } from './../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  activeBook: Book;

  constructor(private route: ActivatedRoute, private service: BookService) { }

  async ngOnInit(): Promise<void> {

    this.activeBook = {
      id: 'Loading...',
      title: 'Loading...',
      authors: 'Loading...',
      cover: 'Loading...',
      description: 'Loading...',
      publish_date: 'Loading...'
    };

    this.route.paramMap.subscribe(async (paramMap) => {
        const id = paramMap.get('bookId');
        this.activeBook = await this.service.getBook(id);
        console.log(this.activeBook);

      });

  }

}
