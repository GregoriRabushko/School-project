import {Routes} from "@angular/router";
import {SelectSchoolListComponent} from "../components/select-school-list/select-school-list.component";
import {ItemsToSchoolComponent} from "../components/items-to-school/items-to-school.component";
import {UserProfilComponent} from "../components/user-profil/user-profil.component";
import {MessangerComponent} from "../components/messanger/messanger.component";
import {NewsComponent} from "../components/news/news.component";
import {SearchComponent} from "../components/search/search.component";
import {AboutUsComponent} from "../components/about-us/about-us.component";
import {ScheduleForWorkersComponent} from "../components/schedule-for-workers/schedule-for-workers.component";
import {SchoolCanteenComponent} from "../components/school-canteen/school-canteen.component";
import {StudentsListComponent} from "../components/select-school-list/students-list/students-list.component";

export const frameRout: Routes =[
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
]
