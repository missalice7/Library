import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LinkListComponent } from './sidebar/link-list/link-list.component';
import { BookDetailsComponent } from './main-page/book-details/book-details.component';
import { HomepageComponent } from './main-page/homepage/homepage.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LinkListComponent,
    BookDetailsComponent,
    HomepageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
