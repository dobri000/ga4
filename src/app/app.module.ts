import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsCompanyComponent } from './analytics-company/analytics-company.component';
import { AnalyticsFacultyComponent } from './analytics-faculty/analytics-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsCompanyComponent,
    AnalyticsFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
