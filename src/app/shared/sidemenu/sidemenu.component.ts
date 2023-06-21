import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  appitems: any = [];

  config = {
    paddingAtStart: true,
    classname: "side-nav-menu",
    fontColor: "#000",
    selectedListFontColor: "#267fff",
    // backgroundColor: "#dad6ff",
    highlightOnSelect: true,
    useDividers: false,
    collapseOnSelect: true,
  };
  constructor() { }

  ngOnInit(): void {

    this.appitems = [
			{
				label: "Case Type/ No./ Year",
				link: "/",
				// icon: "leaderboard"
			},
			{
			  label: "Petitioner/Respondent",
			  link: "/petitioner-respondent",
			//   icon: "pets"
			},			
			{
				label: "Date of Final Order",
				link: '/final-order',
				// icon: "group",
			},
			{
			  label: "Judge Name/ Judges Name",
			  link: "/judge-name",
			},
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			,
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			,
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			,
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			,
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			,
			{
			  label: "My profile",
			  link: "/my-profile",
			},,
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			,
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			,
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			,
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			,
			{
			  label: "My profile",
			  link: "/my-profile",
			},
			
		];
  }

}
