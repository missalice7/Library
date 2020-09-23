import { Component, OnInit, } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { SearchAuthorService } from './../search-author.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  constructor(private messageService: SearchAuthorService) { }

  getAuthor(f: NgForm): void {
    this.messageService.sendMessage(f.value.author);
    // console.log(f.value.author);
  }

  ngOnInit(): void {
}

}
