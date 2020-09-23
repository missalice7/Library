import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchAuthorService {

  constructor() { }

  private subject = new Subject<string>();

    sendAuthor(author: string): void {
        this.subject.next(author);
    }

    clearAuthor(): void {
        this.subject.next();
    }

    getAuthor(): Observable<any> {
        return this.subject.asObservable();
    }

}
