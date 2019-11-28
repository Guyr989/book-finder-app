import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-popup',
  templateUrl: './book-popup.component.html',
  styleUrls: ['./book-popup.component.scss']
})
export class BookPopupComponent implements OnInit {

  constructor() {
  }

  @Input() book: Book;


  ngOnInit() {
    console.log(this.book);
  }

}
