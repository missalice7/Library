import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchAuthorService {

  constructor() { }

  private subject = new Subject<string>();

    sendMessage(message: string): void {
        this.subject.next(message);
    }

    clearMessages(): void {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}
