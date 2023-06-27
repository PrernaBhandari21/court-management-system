import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userType: string | undefined; 


  username: string | undefined;
  password: string | undefined;
  re_password: string | undefined;

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('re-Password:', this.re_password);

  }

}
