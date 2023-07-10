import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../common/shared.module";
import {MessangerComponent} from "./messanger.component";



@NgModule({
  declarations: [
    MessangerComponent,

  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class MessengerModule { }
