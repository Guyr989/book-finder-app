import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private data: DataService, private router: Router) {
  }

  @ViewChild('titleUserName', {static: false}) titleUserName: ElementRef;

  ngOnInit() {
    this.getMessage();

  }


  ngAfterViewInit(): void {
    //todo
    if (!this.titleUserName) {
      this.router.navigate(['/'])
    }
  }

  username: string;
  shopingCart: Object;

  openShoppingCart() {
    if (!this.shopingCart) {
      console.log('empty');
    }
    return null;
  }

  getMessage() {
    this.data.userNameMessage$.subscribe(data => {
      this.username = data;
    });
  }

}
