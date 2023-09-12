import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsCompanyComponent } from './analytics-company/analytics-company.component';
import { AnalyticsFacultyComponent } from './analytics-faculty/analytics-faculty.component';

const routes: Routes = [
  {path: 'company', component: AnalyticsCompanyComponent},
  {path: 'faculty', component: AnalyticsFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
