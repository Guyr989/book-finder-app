import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private data:DataService) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      username: ['',
        [Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
          Validators.minLength(2),
          Validators.maxLength(10)
        ]
      ],
    });

  }

  get username() {
    return this.profileForm.get('username');
  }


  send() {
     this.data.sendMessage(this.username.value);
     this.router.navigate(['/home'])
  }


}


