import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  checkLocalStorage(): string{
    if (localStorage.length === 0 || localStorage === undefined || localStorage === null){
      localStorage.setItem('author', JSON.stringify('tolkien'));
      const author = JSON.parse(localStorage.getItem('author'));
      return author;
    }else{
      const author = JSON.parse(localStorage.getItem('author'));
      return author;
    }

  }

  newLocalStorage(newauthor: string): void{
    localStorage.clear();
    localStorage.setItem('author', JSON.stringify(newauthor));
  }





}
