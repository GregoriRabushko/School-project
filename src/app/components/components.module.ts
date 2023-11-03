import {NgModule} from "@angular/core";
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { CheckboxComponent } from './registration/checkbox/checkbox.component';
import {AboutUsModule} from "./about-us/about-us.module";
import {SchoolCanteenModule} from "./school-canteen/school-canteen.module";
import {SearchModule} from "./search/search.module";
import {MessengerModule} from "./messanger/messenger.module";
import {NewsModule} from "./news/news.module";
import {ItemsToSchoolModule} from "./items-to-school/items-to-school.module";
import {ScheduleForWorkersModule} from "./schedule-for-workers/schedule-for-workers.module";
import {StudentsListModule} from "./select-school-list/students-list/students-list.module";
import {UserProfilModule} from "./user-profil/user-profil.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    AuthorizationComponent,
    RegistrationComponent,
    CheckboxComponent,
  ],
  imports: [
    AboutUsModule,
    SchoolCanteenModule,
    SearchModule,
    MessengerModule,
    ItemsToSchoolModule,
    ScheduleForWorkersModule,
    StudentsListModule,
    UserProfilModule,
    NewsModule,
    ReactiveFormsModule,
    RouterLinkWithHref,
  ],
  providers: [],
  exports: [
    AboutUsModule,
    SchoolCanteenModule,
    SearchModule,
    MessengerModule,
    ItemsToSchoolModule,
    ScheduleForWorkersModule,
    StudentsListModule,
    UserProfilModule,
    NewsModule,
  ],
  bootstrap: []
})
export class ComponentsModule { }