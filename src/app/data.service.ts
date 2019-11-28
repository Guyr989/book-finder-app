import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
  }


  private usernameSource = new Subject<string>();
  userNameMessage$ = this.usernameSource.asObservable();



  sendMessage(message: string) {
    console.log(message);
    this.usernameSource.next(message);
  }
}
