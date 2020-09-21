import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';

  sidebarMobileStatus = 'sidebar-mobile';
  closeBtnStatus = 'sidebar-mobile';

  openSidebar(): void {
    console.log('working!');
    this.sidebarMobileStatus = 'display-show';
    this.closeBtnStatus = 'display-show';
  }

  closeSidebar(): void {
    this.sidebarMobileStatus = 'sidebar-mobile';
    this.closeBtnStatus = 'sidebar-mobile';
  }


}
