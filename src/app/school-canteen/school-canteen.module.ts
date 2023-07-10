import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../common/shared.module";
import {SchoolCanteenComponent} from "./school-canteen.component";



@NgModule({
  declarations: [
    SchoolCanteenComponent,

  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class SchoolCanteenModule { }
