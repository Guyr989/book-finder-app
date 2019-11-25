import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  constructor(private http: HttpClient) {

  }

  private apiKey = environment.GOOGLE_BOOKS_API_KEY;

  getBooks() {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=' + this.apiKey);
  }
}
