import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {SelectSchoolListComponent} from "../select-school-list.component";
import {TableRowWithGradeComponent} from "./table-row-with-grade/table-row-with-grade.component";
import {TableRowWithStudentsComponent} from "./table-row-with-students/table-row-with-students.component";
import {AddNewSchoolClassComponent} from "../add-new-school-class/add-new-school-class.component";
import {CardListComponent} from "../../card-list/card-list.component";
import {ChooseASchoolSubjectComponent} from "../choose-a-school-subject/choose-a-school-subject.component";
import {StudentListPipe} from "./student-list.pipe";
import {StudentsListComponent} from "./students-list.component";
import {SharedModule} from "../../../common/shared.module";
import {HeaderCModule} from "../../header-c/header-c.module";

@NgModule({
  declarations: [
    SelectSchoolListComponent,
    TableRowWithGradeComponent,
    TableRowWithStudentsComponent,
    AddNewSchoolClassComponent,
    CardListComponent,
    ChooseASchoolSubjectComponent,
    StudentListPipe,
    StudentsListComponent

  ],
  exports: [
    StudentListPipe
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        HeaderCModule,
    ]
})
export class StudentsListModule { }
