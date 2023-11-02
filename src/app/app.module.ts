import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule }   from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';

import { FullCalendarModule } from '@fullcalendar/angular';
import { appRoute } from 'src/app/app.route';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { CheckboxComponent } from './registration/checkbox/checkbox.component';

import {AboutUsModule} from "./about-us/about-us.module";
import {ItemsToSchoolModule} from "./items-to-school/items-to-school.module";
import {MessengerModule} from "./messanger/messenger.module";
import {NewsModule} from "./news/news.module";
import {ScheduleForWorkersModule} from "./schedule-for-workers/schedule-for-workers.module";
import {SchoolCanteenModule} from "./school-canteen/school-canteen.module";
import {SearchModule} from "./search/search.module";
import {StudentsListModule} from "./select-school-list/students-list/students-list.module";
import {UserProfilModule} from "./user-profil/user-profil.module";
import {SharedModule} from "./common/shared.module";
import {MenuModule} from "./menu/menu.module";
import {HeaderNavModule} from "./header-nav/header-nav.module";

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
    ReactiveFormsModule,
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
    HeaderNavModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
