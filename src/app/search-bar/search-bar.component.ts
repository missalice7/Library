import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { SearchAuthorService } from './../search-author.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitAuthor = new EventEmitter<void>();

  constructor(
    private messageService: SearchAuthorService,
    private localStorageService: LocalStorageService
    ) { }

  getAuthor(f: NgForm): void {
    this.localStorageService.newLocalStorage(f.value.author);
    this.messageService.sendMessage(f.value.author);
    this.submitAuthor.emit();
    // console.log(f.value.author);
  }

  ngOnInit(): void {
}

}
