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
			  label: "Keywords Search",
			  link: "/keyword-search",
			},
			,
			{
			  label: "Free Text Search",
			  link: "/free-text-search",
			},
			,
			{
			  label: "Book Search",
			  link: "/book-search",
			},
			,
			{
			  label: "Act Search",
			  link: "/act-search",
			},
			,
			{
			  label: "Notice Notifications",
			  link: "/notice-notifications",
			},
			,
			{
			  label: "Email Search",
			  link: "/email-search",
			},,
			{
			  label: "register-civil",
			  link: "/register-civil",
			},
			,
			{
			  label: "register-criminal",
			  link: "/register-criminal",
			},
			,
			{
			  label: "memo-search",
			  link: "/memo-search",
			},
			,
			{
			  label: "Statement",
			  link: "/statement",
			},
			{
			  label: "Service Record",
			  link: "/service-record",
			},
			{
			  label: "Returns Search",
			  link: "/returns-search",
			},

			// adminnnnnn below 

			{
			  label: "Items",
			  link: "/items",
			},
			{
				label: "Bulk Delete",
				link: "/bulk-delete",
			},
			{
				label:"Advance Emails",
				link:"advance-emails"
			},
			{
				label:"Synonym Management",
				link:"synonym-management"
			},
			{
				label:"EPeople",
				link:"e-person"
			}

		];
  }

}
