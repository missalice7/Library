import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SearchAuthorService {

  constructor(private localStorageService: LocalStorageService) { }

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
