import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseTypeComponent } from './components/case-type/case-type.component';
import { PetitionerRespondentComponent } from './components/petitioner-respondent/petitioner-respondent.component';
import { FinalOrderComponent } from './components/final-order/final-order.component';
import { JudgeNameComponent } from './components/judge-name/judge-name.component';
import { KeywordSearchComponent } from './components/keyword-search/keyword-search.component';
import { FreeTextSearchComponent } from './components/free-text-search/free-text-search.component';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { ActsSearchComponent } from './components/acts-search/acts-search.component';
import { NoticeNotificationsComponent } from './components/notice-notifications/notice-notifications.component';
import { EmailSearchComponent } from './components/email-search/email-search.component';
import { MemoSearchComponent } from './components/memo-search/memo-search.component';
import { RegisterCriminalSearchComponent } from './components/register-criminal-search/register-criminal-search.component';
import { RegisterCivilSearchComponent } from './components/register-civil-search/register-civil-search.component';
import { ReturnsSearchComponent } from './components/returns-search/returns-search.component';
import { ServiceRecordComponent } from './components/service-record/service-record.component';
import { StatementComponent } from './components/statement/statement.component';
import { ItemsComponent } from './components/items/items.component';
import { BulkDeleteComponent } from './components/bulk-delete/bulk-delete.component';
import { AdvanceEmailsComponent } from './components/advance-emails/advance-emails.component';
import { SynonymManagementComponent } from './components/synonym-management/synonym-management.component';
import { EPeopleComponent } from './components/e-people/e-people.component';
import { AddEditEPersonComponent } from './add-edit-eperson/add-edit-eperson.component';

const routes: Routes = [
  {
    path:"",
    component:CaseTypeComponent
  },
  {
    path:"petitioner-respondent",
    component:PetitionerRespondentComponent
  },
  {
    path:"final-order",
    component:FinalOrderComponent
  },
  {
    path:"judge-name",
    component:JudgeNameComponent
  },
  {
    path:"keyword-search",
    component:KeywordSearchComponent
  },
  {
    path:"free-text-search",
    component:FreeTextSearchComponent
  },
  {
    path:"keyword-search",
    component:KeywordSearchComponent
  },
  {
    path:"book-search",
    component:BooksSearchComponent
  },
  {
    path:"act-search",
    component:ActsSearchComponent
  },
  {
    path:"notice-notifications",
    component:NoticeNotificationsComponent
  },
  {
    path:"email-search",
    component:EmailSearchComponent
  },
  {
    path:"register-civil",
    component:RegisterCivilSearchComponent
  },
  {
    path:"register-criminal",
    component:RegisterCriminalSearchComponent
  },
  {
    path:"memo-search",
    component:MemoSearchComponent
  },
  {
    path:"statement",
    component:StatementComponent
  },
  {
    path:"service-record",
    component:ServiceRecordComponent
  },
  {
    path:"returns-search",
    component:ReturnsSearchComponent
  },
  {
    path:"items",
    component:ItemsComponent
  },
  {
    path:"bulk-delete",
    component:BulkDeleteComponent
  },
  {
    path:"advance-emails",
    component:AdvanceEmailsComponent
  },
  {
    path:"synonym-management",
    component:SynonymManagementComponent
  },
  {
    path:"e-person",
    component:EPeopleComponent
  },
  {
    path:"addEditEPerson",
    component:AddEditEPersonComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
