import {Routes} from "@angular/router";
import {SelectSchoolListComponent} from "./select-school-list.component";
import {StudentsListComponent} from "./students-list/students-list.component";
import {HomeSelectListComponent} from "./home-select-list/home-select-list.component";
import {SchoolCanteenComponent} from "../school-canteen/school-canteen.component";
import {FrameComponent} from "../../frame/frame.component";


export const itemsSelectListRouts:Routes = [
  {
    path: '',
    component: SelectSchoolListComponent,
    children: [
      {path: '', component: HomeSelectListComponent},
      {path: 'studentList/:classIndex/:subjectIndex', component: StudentsListComponent},
    ]
  }
]

export const selectSchoolListRout:Routes = [
  { path: 'selectList', component: FrameComponent, children: itemsSelectListRouts },

];
