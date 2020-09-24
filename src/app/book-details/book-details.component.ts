import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from './../types';
import { BookService } from './../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: [
    './book-details.component.css',
    './loading.component.css'
]
})
export class BookDetailsComponent implements OnInit {

  activeBook: Book;
  loader: string;
  loaded: string;

  constructor(private route: ActivatedRoute, private service: BookService) { }

  async ngOnInit(): Promise<void> {

    this.loader = 'lds-ellipsis';
    this.loaded = 'inactive';

    this.route.paramMap.subscribe(async (paramMap) => {
        const id = paramMap.get('bookId');
        this.activeBook = await this.service.getBook(id);
        this.loader = 'lds-ellipsis-none';
        this.loaded = 'book-details';
      });
  }
}
