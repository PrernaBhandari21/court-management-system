import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseTypeComponent } from './components/case-type/case-type.component';
import { PetitionerRespondentComponent } from './components/petitioner-respondent/petitioner-respondent.component';
import { FinalOrderComponent } from './components/final-order/final-order.component';
import { JudgeNameComponent } from './components/judge-name/judge-name.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
