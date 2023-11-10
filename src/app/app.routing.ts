import {Routes} from "@angular/router";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {FrameComponent} from "./frame/frame.component";
import {HomeComponent} from "./components/home/home.component";
import {SelectSchoolListComponent} from "./components/select-school-list/select-school-list.component";
import {ItemsToSchoolComponent} from "./components/items-to-school/items-to-school.component";
import {UserProfilComponent} from "./components/user-profil/user-profil.component";
import {MessangerComponent} from "./components/messanger/messanger.component";
import {NewsComponent} from "./components/news/news.component";
import {SearchComponent} from "./components/search/search.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {ScheduleForWorkersComponent} from "./components/schedule-for-workers/schedule-for-workers.component";
import {AppComponent} from "./app.component";



export const appRouting: Routes =[
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: FrameComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'home', component: HomeComponent },
          { path: 'selectList', component: SelectSchoolListComponent },
          { path: 'schoolCanteen', loadChildren: () => import('./components/school-canteen/school-canteen.module').then(m => m.SchoolCanteenModule) },
          { path: 'itemsToSchool', component: ItemsToSchoolComponent },
          { path: 'userprofile', component: UserProfilComponent },
          { path: 'messenger', component: MessangerComponent },
          { path: 'news', component: NewsComponent },
          { path: 'search', component: SearchComponent },
          { path: 'aboutUs', component: AboutUsComponent },
          { path: 'scheduleWorkers', component: ScheduleForWorkersComponent },
        ]
      },
      { path: 'authorization', component: AuthorizationComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: '**', component: PageNotFoundComponent },
    ]
  },
];
