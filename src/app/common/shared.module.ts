import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from "../components/menu/menu.module";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MenuModule,
  ],
  exports: [
    MenuModule,
  ]
})
export class SharedModule { }
