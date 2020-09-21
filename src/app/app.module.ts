import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LinkListComponent } from './sidebar/link-list/link-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageBtnComponent } from './sidebar/homepage-btn/homepage-btn.component';
import { ListBtnComponent } from './list-btn/list-btn.component';
import { SidebarMobileComponent } from './sidebar-mobile/sidebar-mobile.component';
import { CloseBtnComponent } from './close-btn/close-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LinkListComponent,
    BookDetailsComponent,
    HomepageComponent,
    HomepageBtnComponent,
    ListBtnComponent,
    SidebarMobileComponent,
    CloseBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
