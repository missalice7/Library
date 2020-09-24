import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-btn',
  templateUrl: './list-btn.component.html',
  styleUrls: ['./list-btn.component.css']
})
export class ListBtnComponent implements OnInit {
  @Output() opensidebar = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }


  openSidebar(): void {
    this.opensidebar.emit();
  }

}
