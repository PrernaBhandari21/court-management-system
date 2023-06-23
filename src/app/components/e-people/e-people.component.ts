import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-people',
  templateUrl: './e-people.component.html',
  styleUrls: ['./e-people.component.css']
})
export class EPeopleComponent implements OnInit {

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  navigateToAddEditEPerson(){
    this.route.navigate(["addEditEPerson"]);
  }

}
