import { Component } from '@angular/core';
import { GoogleBookApiService } from '../google-books-api.service';


@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.scss']
})
export class BooksearchComponent {

  constructor(private gsa: GoogleBookApiService) {
  }

  private books;

  findBook(searchTerm) {
    this.gsa.searchBooks(searchTerm).subscribe((data:any[]) => {
      console.log(data);
      this.books = data;
    });

  }


}
