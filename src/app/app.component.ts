import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';

  closeBtnStatus = 'inactive';
  sidebarStatus = 'sidebar';

  openSidebar(): void {
    this.sidebarStatus = 'active';
    this.closeBtnStatus = 'active';
  }

  closeSidebar(): void {
    this.sidebarStatus = 'inactive';
    this.closeBtnStatus = 'sidebar';
  }


}
