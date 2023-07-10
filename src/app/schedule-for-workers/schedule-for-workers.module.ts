import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../common/shared.module";
import {ScheduleForWorkersComponent} from "./schedule-for-workers.component";



@NgModule({
  declarations: [
    ScheduleForWorkersComponent,

  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class ScheduleForWorkersModule { }
