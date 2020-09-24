import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchAuthorService {

  constructor() { }

  private subject = new Subject<any>();

    sendAuthor(author: string): void {
        this.subject.next(author);
    }

    clearMessages(): void {
        this.subject.next();
    }

    getAuthor(): Observable<any> {
        return this.subject.asObservable();
    }


    reloadBookList(newlist: boolean): void{
      this.subject.next(newlist);
    }
    startReload(): Observable<any> {
      return this.subject.asObservable();
  }

}
