import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cart: Book[] = [];
  
  constructor() {
  }


  private usernameSource = new Subject<string>();
  userNameMessage$ = this.usernameSource.asObservable();
 


  sendMessage(message: string) {
    this.usernameSource.next(message);
  }


addToCart(book:Book){
  this.cart.push(book);
}

}
