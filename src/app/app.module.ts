import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { ItemsToSchoolComponent } from './items-to-school/items-to-school.component';
import { SchoolMagazineComponent } from './school-magazine/school-magazine.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MenuComponent } from './menu/menu.component';
import { ListJinglesComponent } from './items-to-school/list-jingles/list-jingles.component';
import { ChooseASubjectComponent } from './school-magazine/choose-a-subject/choose-a-subject.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';
import { MessangerComponent } from './messanger/messanger.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    ItemsToSchoolComponent,
    SchoolMagazineComponent,
    MenuComponent,
    ListJinglesComponent,
    ChooseASubjectComponent,
    UserProfilComponent,
    BulletinBoardComponent,
    MessangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
