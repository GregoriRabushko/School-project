import {Routes} from "@angular/router";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {RegistrationComponent} from "./registration/registration.component";
import {SelectSchoolListComponent} from "./students-list/select-school-list/select-school-list.component";
import {MenuComponent} from "./menu/menu.component";
import {StudentsListComponent} from "./students-list/students-list.component";
import {UserProfilComponent} from "./user-profil/user-profil.component";
import {MessangerComponent} from "./messanger/messanger.component";
import {ItemsToSchoolComponent} from "./items-to-school/items-to-school.component";
import {NewsComponent} from "./news/news.component";
import {SchoolCanteenComponent} from "./school-canteen/school-canteen.component";
import {ScheduleForWorkersComponent} from "./schedule-for-workers/schedule-for-workers.component";
import {SearchComponent} from "./search/search.component";
import {AboutUsComponent} from "./about-us/about-us.component";

export const appRoute: Routes =[
  { path: '', component: AuthorizationComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'selectList', component: SelectSchoolListComponent },
  { path: 'itemsToSchool', component: ItemsToSchoolComponent },
  { path: 'userprofile', component: UserProfilComponent },
  { path: 'messenger', component: MessangerComponent },
  { path: 'news', component: NewsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'scheduleWorkers', component: ScheduleForWorkersComponent },
  { path: 'schoolCanteen', component: SchoolCanteenComponent },
  { path: 'studentList/:classIndex/:subjectIndex', component: StudentsListComponent }
];
