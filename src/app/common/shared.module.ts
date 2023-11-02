import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from "../menu/menu.module";
import { HeaderNavModule } from "../header-nav/header-nav.module";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MenuModule,
    HeaderNavModule,
  ],
  exports: [
    MenuModule,
    HeaderNavModule
  ]
})
export class SharedModule { }
