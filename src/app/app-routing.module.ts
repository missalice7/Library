import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './main-page/homepage/homepage.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: 'book/:bookId', component: MainPageComponent},
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
