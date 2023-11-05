import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared.module";
import {NewsComponent} from "./news.component";
import {HeaderCModule} from "../header-c/header-c.module";



@NgModule({
  declarations: [
    NewsComponent,

  ],
    imports: [
        SharedModule,
        CommonModule,
        HeaderCModule
    ]
})
export class NewsModule { }
