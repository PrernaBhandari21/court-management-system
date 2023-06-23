import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synonym-management',
  templateUrl: './synonym-management.component.html',
  styleUrls: ['./synonym-management.component.css']
})
export class SynonymManagementComponent implements OnInit {
  synonymText: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  search(): void {
    if (this.synonymText.trim() === '') {
      alert('Please enter word in textbox !');
    } else {
      // Perform the desired search functionality here
      console.log('Search synonym: ', this.synonymText);
    }
  }

}
