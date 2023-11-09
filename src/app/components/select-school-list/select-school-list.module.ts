import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {selectSchoolListRout} from "./select-school-list.route";

import {AddNewSchoolClassComponent} from "./add-new-school-class/add-new-school-class.component";
import {ChooseASchoolSubjectComponent} from "./choose-a-school-subject/choose-a-school-subject.component";
import {StudentsListComponent} from "./students-list/students-list.component";
import {HeaderCModule} from "../header-c/header-c.module";
import {StudentListPipe} from "./students-list/student-list.pipe";
import {TableRowWithStudentsComponent} from "./students-list/table-row-with-students/table-row-with-students.component";
import {TableRowWithGradeComponent} from "./students-list/table-row-with-grade/table-row-with-grade.component";
import {SelectSchoolListComponent} from "./select-school-list.component";
import { HomeSelectListComponent } from './home-select-list/home-select-list.component';





@NgModule({
  declarations: [
    AddNewSchoolClassComponent,
    ChooseASchoolSubjectComponent,
    StudentsListComponent,
    StudentListPipe,
    TableRowWithStudentsComponent,
    SelectSchoolListComponent,
    TableRowWithGradeComponent,
    HomeSelectListComponent,


  ],
  imports: [
    HeaderCModule,
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterModule.forRoot(selectSchoolListRout),

  ],
  exports: [
    StudentListPipe,

  ]
})
export class SelectSchoolListModule { }
