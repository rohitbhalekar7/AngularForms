import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from '../personal/personal.component';
import { OfficialComponent } from '../official/official.component';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

const paths: Routes = [
  { path: 'Personal', component: PersonalComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'EmpList', component: EmployeeListComponent }
];

@NgModule({
  declarations: [PersonalComponent, OfficialComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(paths)

  ],

})
export class EmployeeModule { }
