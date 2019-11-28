import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { GoogleBookApiService } from '../google-books-api.service';
import { Book } from '../book.model';


@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.scss']
})

export class BooksearchComponent {
  @Output() selectedBook: Book;

  constructor(private gsa: GoogleBookApiService) {
  }

  private books;
  @ViewChild('searchTerm', {static: false}) searchTerm: ElementRef;


  findBook(searchTerm) {
    this.gsa.searchBooks(searchTerm).subscribe((data: Book[]) => {
      this.books = data['items'];
      console.log(this.books[0]);
    });

  }


  selcetResult(result) {
    this.selectedBook = result;
    this.searchTerm.nativeElement.value = result.title;
    this.books = '';
  }

}
