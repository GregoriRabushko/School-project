import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { ItemsToSchoolComponent } from './items-to-school/items-to-school.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MenuComponent } from './menu/menu.component';
import { ListJinglesComponent } from './items-to-school/list-jingles/list-jingles.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import { MessangerComponent } from './messanger/messanger.component';
import { SelectSchoolListComponent } from './students-list/select-school-list/select-school-list.component';
import { TableRowWithStudentsComponent } from './students-list/table-row-with-students/table-row-with-students.component';
import { TableRowWithGradeComponent } from './students-list/table-row-with-grade/table-row-with-grade.component';
import { ChooseASchoolSubjectComponent } from './students-list/select-school-list/choose-a-school-subject/choose-a-school-subject.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { appRoutes } from 'src/app/Approutes';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    ItemsToSchoolComponent,
    MenuComponent,
    ListJinglesComponent,
    UserProfilComponent,
    BulletinBoardComponent,
    MessangerComponent,
    SelectSchoolListComponent,
    TableRowWithStudentsComponent,
    TableRowWithGradeComponent,
    ChooseASchoolSubjectComponent,
    AuthorizationComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
