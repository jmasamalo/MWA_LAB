import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { StudentProfileComponent } from './student-profile.component';

// Import our Routes file
import { myRoutes } from "./app.routes";

import { DbService } from './db.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
