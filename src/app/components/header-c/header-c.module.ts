import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {HeaderCComponent} from "./header-c.component";
import {NgStyle} from "@angular/common";


@NgModule({

  declarations: [
    HeaderCComponent,

  ],
  imports: [
    NgStyle,
    CommonModule,

  ],
  providers: [],
  exports: [
    HeaderCComponent,
  ],
  bootstrap: []
})

export class HeaderCModule { }

