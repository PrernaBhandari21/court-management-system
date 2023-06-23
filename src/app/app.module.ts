import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from 'ng-material-multilevel-menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
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
import { RegisterCivilSearchComponent } from './components/register-civil-search/register-civil-search.component';
import { RegisterCriminalSearchComponent } from './components/register-criminal-search/register-criminal-search.component';
import { MemoSearchComponent } from './components/memo-search/memo-search.component';
import { StatementComponent } from './components/statement/statement.component';
import { ServiceRecordComponent } from './components/service-record/service-record.component';
import { ReturnsSearchComponent } from './components/returns-search/returns-search.component';
import { ItemsComponent } from './components/items/items.component';
import { BulkDeleteComponent } from './components/bulk-delete/bulk-delete.component';
import { AdvanceEmailsComponent } from './components/advance-emails/advance-emails.component';
import { SynonymManagementComponent } from './components/synonym-management/synonym-management.component';
import { EPeopleComponent } from './components/e-people/e-people.component';
import { AddEditEPersonComponent } from './add-edit-eperson/add-edit-eperson.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    CaseTypeComponent,
    PetitionerRespondentComponent,
    FinalOrderComponent,
    JudgeNameComponent,
    KeywordSearchComponent,
    FreeTextSearchComponent,
    BooksSearchComponent,
    ActsSearchComponent,
    NoticeNotificationsComponent,
    EmailSearchComponent,
    RegisterCivilSearchComponent,
    RegisterCriminalSearchComponent,
    MemoSearchComponent,
    StatementComponent,
    ServiceRecordComponent,
    ReturnsSearchComponent,
    ItemsComponent,
    BulkDeleteComponent,
    AdvanceEmailsComponent,
    SynonymManagementComponent,
    EPeopleComponent,
    AddEditEPersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialMultilevelMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule

    
  ],
  providers: [MultilevelMenuService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
