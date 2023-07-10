import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { StudentsListComponent } from 'src/app/students-list/students-list.component';
import { SelectSchoolListComponent } from './select-school-list/select-school-list.component';
import { AddNewSchoolClassComponent } from './select-school-list/add-new-school-class/add-new-school-class.component';
import { CardListComponent } from './select-school-list/card-list/card-list.component';
import { ChooseASchoolSubjectComponent } from './select-school-list/choose-a-school-subject/choose-a-school-subject.component';

import { TableRowWithGradeComponent } from './table-row-with-grade/table-row-with-grade.component';
import { TableRowWithStudentsComponent } from './table-row-with-students/table-row-with-students.component';

import { StudentListPipe } from './student-list.pipe';
import { MenuComponent } from 'src/app/menu/menu.component';





@NgModule({
  declarations: [
    SelectSchoolListComponent,
    TableRowWithGradeComponent,
    TableRowWithStudentsComponent,
    AddNewSchoolClassComponent,
    CardListComponent,
    ChooseASchoolSubjectComponent,
    StudentListPipe,
    MenuComponent,
    StudentsListComponent

  ],
  exports: [
    StudentListPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentsListModule { }
