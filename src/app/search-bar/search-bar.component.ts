import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { SearchAuthorService } from './../search-author.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  faSearch = faSearch;

  constructor(
    private searchService: SearchAuthorService,
    private localStorageService: LocalStorageService
    ) { }

  getAuthor(f: NgForm): void {
    this.localStorageService.newLocalStorage(f.value.author);
    this.searchService.sendAuthor(f.value.author);
    this.searchService.reloadBookList(true);
  }
  clearMessages(): void {
    this.searchService.clearMessages();
}

  ngOnInit(): void {
}

}
