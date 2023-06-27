import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username: string | undefined;
  password: string | undefined;

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

}
