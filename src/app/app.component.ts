import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';

  closeBtnStatus = 'close-btn';
  sidebarStatus = 'sidebar';

  openSidebar(): void {
    this.sidebarStatus = 'active';
    this.closeBtnStatus = 'active';
  }

  closeSidebar(): void {
    this.sidebarStatus = 'close-btn';
    this.closeBtnStatus = 'sidebar';
  }


}
