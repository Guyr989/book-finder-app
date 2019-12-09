import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {


  constructor(private data: DataService) {
  }

  private message: string = 'you have no items in your cart';
  private isOpen: boolean = false;
  cartItems;


  ngOnInit() {
    this.updateItemsInCart();
  }

  updateItemsInCart() {
    this.data.cartItem.subscribe(numberOfItems => {
        //casting numberOfItems as a number
        this.cartItems = numberOfItems;
        this.message = `you have ${this.cartItems.length} ${this.cartItems.length === 1 ? 'item' : 'items'} in your cart`;
      }
    );
  }

  openShoppingCart() {
    this.isOpen = true;
    this.updateItemsInCart();
  }


  closeCart() {
    this.isOpen = false;
  }

  removeFromCart(removeitem: any) {
         console.log(this.cartItems[removeitem]);
    for (let item of this.cartItems) {
      if (item.title === removeitem.title) {
        // this.cartItems[item] = null;
      }
    }
  }
}
