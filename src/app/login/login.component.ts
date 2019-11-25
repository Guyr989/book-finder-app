import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor() {
  }


  ngOnInit() {
  }


  validateUser(username) {
    console.log(username);
    return username.value.length > 0;
  }

}
