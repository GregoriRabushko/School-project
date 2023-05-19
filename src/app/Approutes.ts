import {Routes} from "@angular/router";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {RegistrationComponent} from "./registration/registration.component";
import {SelectSchoolListComponent} from "./students-list/select-school-list/select-school-list.component";
import {MenuComponent} from "./menu/menu.component";
import {StudentsListComponent} from "./students-list/students-list.component";

export const appRoutes: Routes =[
  { path: '', component: AuthorizationComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'select', component: SelectSchoolListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'studentList', component: StudentsListComponent }
];
