import { Injectable } from '@angular/core';
import 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class GoogleBookApiService {

  constructor(private http: HttpClient) {
  }

  private apiKey = environment.GOOGLE_BOOKS_API_KEY;
  private limit = 20;

  searchBooks(search) {
    let encodedURI = encodeURI(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${this.limit}&key=${this.apiKey}`);
    return this.http.get(encodedURI);
  }

  searchByISBN(isbn) {
    let encodedURI = encodeURI('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + '&maxResults=1');
    return this.http.get(encodedURI).subscribe(data => {
      return data
    })

  }


}
