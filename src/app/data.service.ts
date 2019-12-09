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
  cartItem = new Subject();

  sendMessage(message: string) {
    this.usernameSource.next(message);
  }


  updateCartItems() {
    return this.cartItem.next(this.cart);
  }

  addToCart(book: Book) {
    this.cart.push(book);
    this.updateCartItems();
  }

}
