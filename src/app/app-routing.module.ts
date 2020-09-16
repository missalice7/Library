import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './main-page/book-details/book-details.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: 'book/:id', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
