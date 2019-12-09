import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GoogleBookApiService } from '../google-books-api.service';
import { Book } from '../book.model';


@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.scss']
})

export class BooksearchComponent {
  @Input() selectedBook: Book;

  constructor(private gsa: GoogleBookApiService) {
  }

  private books;
  @ViewChild('searchTerm', {static: false}) searchTerm: ElementRef;
  @ViewChild('popup', {static: false}) popup: ElementRef;


  findBook(searchTerm) {
    this.gsa.searchBooks(searchTerm).subscribe((data: Book[]) => {
      this.books = data['items'];
    });

  }

  selectResult(result) {
    this.selectedBook = result;
    this.searchTerm.nativeElement.value = result.title;
    this.books = '';
  }

  closePopup($event) {
    if (this.selectedBook && $event.target.className === 'popup-wrap ng-star-inserted') {
      this.selectedBook = null;
    }
  }
}
