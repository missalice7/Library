import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  author: string;

  checkLocalStorage(): string{
    if (localStorage.length === 0 || localStorage === undefined){
      localStorage.setItem('author', JSON.stringify('tolkien'));
    }else{
      this.author = JSON.parse(localStorage.getItem('author'));
    }
    return this.author;
  }

  newLocalStorage(newauthor: string): void{
    localStorage.clear();
    localStorage.setItem('author', JSON.stringify(newauthor));
  }





}
