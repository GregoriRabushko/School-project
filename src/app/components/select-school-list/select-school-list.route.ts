import {Routes} from "@angular/router";
import {SelectSchoolListComponent} from "./select-school-list.component";
import {StudentsListComponent} from "./students-list/students-list.component";
import {HomeSelectListComponent} from "./home-select-list/home-select-list.component";


export const itemsSelectListRouts:Routes = [
  { path: '', component: HomeSelectListComponent },
  { path: 'selectList/:classIndex/:subjectIndex', component: StudentsListComponent },
]

export const selectSchoolListRout:Routes = [
  { path: 'selectList', component: SelectSchoolListComponent, children: itemsSelectListRouts },

];
