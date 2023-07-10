import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../common/shared.module";
import {NewsComponent} from "./news.component";



@NgModule({
  declarations: [
    NewsComponent,

  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class NewsModule { }
