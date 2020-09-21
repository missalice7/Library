import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  statusClass = 'sidebar';
  constructor() { }

  ngOnInit(): void {
  }

  async openSidebar(): Promise<void> {
    console.log('wut?');
    const lalalal = this.statusClass = 'sidebar-mobile';

  }

}
