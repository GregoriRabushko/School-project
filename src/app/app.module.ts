import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';

import { FullCalendarModule } from '@fullcalendar/angular';
import { appRoute } from 'src/app/app.route';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { CheckboxComponent } from './registration/checkbox/checkbox.component';
import { ItemsToSchoolComponent } from './items-to-school/items-to-school.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { MessangerComponent } from './messanger/messanger.component';
import { SchoolCanteenComponent } from './school-canteen/school-canteen.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScheduleForWorkersComponent } from './schedule-for-workers/schedule-for-workers.component';

import { ListJinglesComponent } from './items-to-school/list-jingles/list-jingles.component';
import { BulletinBoardComponent } from './items-to-school/bulletin-board/bulletin-board.component';
import { TableWithItemComponent } from './items-to-school/table-with-item/table-with-item.component';
import { TdCalssNameAndRoomNumberComponent } from './items-to-school/table-with-item/td-calss-name-and-room-number/td-calss-name-and-room-number.component';
import { ItemsComponent } from './items-to-school/table-with-item/items/items.component';
import { ScheduleForTheDayComponent } from './items-to-school/table-with-item/schedule-for-the-day/schedule-for-the-day.component';
import { AddClassToScheduleComponent } from './items-to-school/table-with-item/add-class-to-schedule/add-class-to-schedule.component';

import {AboutUsModule} from "./about-us/about-us.module";
import {ItemsToSchoolModule} from "./items-to-school/items-to-school.module";
import {MenuModule} from "./menu/menu.module";
import {MessengerModule} from "./messanger/messenger.module";
import {NewsModule} from "./news/news.module";
import {ScheduleForWorkersModule} from "./schedule-for-workers/schedule-for-workers.module";
import {SchoolCanteenModule} from "./school-canteen/school-canteen.module";
import {SearchModule} from "./search/search.module";
import {StudentsListModule} from "./students-list/students-list.module";
import {UserProfilModule} from "./user-profil/user-profil.module";
import {SharedModule} from "./common/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegistrationComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
    AboutUsModule,
    ItemsToSchoolModule,
    MenuModule,
    MessengerModule,
    NewsModule,
    ScheduleForWorkersModule,
    SchoolCanteenModule,
    StudentsListModule,
    SearchModule,
    UserProfilModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
