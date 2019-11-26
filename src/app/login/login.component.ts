import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

profileForm = this.fb.group({
  firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  lastName:[''],
});


  constructor(private fb:FormBuilder) {
  }

  ngOnInit(): void {
  }
}


