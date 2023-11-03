import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared.module";
import {AboutUsComponent} from "./about-us.component";



@NgModule({
  declarations: [
    AboutUsComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AboutUsModule { }
