import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { GoogleBookApiService } from './google-books-api.service';
import { BookPopupComponent } from './book-popup/book-popup.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksearchComponent,
    HeaderComponent,
    HomeComponent,
    BookPopupComponent,
    ShopingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule



  ],
  providers: [GoogleBookApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
