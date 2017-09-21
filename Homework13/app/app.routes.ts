import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentsComponent } from "./students.component";
import { StudentProfileComponent } from "./student-profile.component";

const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'students', component: StudentsComponent },
     { path: 'profile/:id', component: StudentProfileComponent },
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
