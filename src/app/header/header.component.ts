import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.getMessage();
  }

  username: string;

  getMessage() {
    this.data.userNameMessage$.subscribe(data => {
      this.username = data;
    });
  }

}
