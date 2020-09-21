import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-close-btn',
  templateUrl: './close-btn.component.html',
  styleUrls: ['./close-btn.component.css']
})
export class CloseBtnComponent implements OnInit {

  @Output() closesidebar = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  closeSidebar(): void {
    this.closesidebar.emit();
  }

}
