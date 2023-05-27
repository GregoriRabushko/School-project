import {Routes} from "@angular/router";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {RegistrationComponent} from "./registration/registration.component";
import {SelectSchoolListComponent} from "./students-list/select-school-list/select-school-list.component";
import {MenuComponent} from "./menu/menu.component";
import {StudentsListComponent} from "./students-list/students-list.component";
import {UserProfilComponent} from "./user-profil/user-profil.component";
import {MessangerComponent} from "./messanger/messanger.component";
import {ItemsToSchoolComponent} from "./items-to-school/items-to-school.component";

export const appRoutes: Routes =[
  { path: '', component: AuthorizationComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'select', component: SelectSchoolListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'itemstoschool', component: ItemsToSchoolComponent },
  { path: 'userprofile', component: UserProfilComponent },
  { path: 'messenger', component: MessangerComponent }
];
