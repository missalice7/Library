import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() author = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getAuthor(f: NgForm): void {
    console.log(f.value);
    this.author.emit(f.value);
  }

}
