import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-popup',
  templateUrl: './book-popup.component.html',
  styleUrls: ['./book-popup.component.scss']
})
export class BookPopupComponent implements OnInit {

  constructor(private data:DataService) {
  }

  @Input() book: Book;
  cart: Book[] = [];
  itemAdd: boolean = false;

  ngOnInit() {

  }

  addToCart(book:Book) {
    this.data.addToCart(book);
    this.itemAdd = true;
    let itemAddedInt = setInterval(() => {
      clearInterval(itemAddedInt);
      this.itemAdd = false;
    }, 3500);

  }


}
