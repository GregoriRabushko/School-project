import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared.module";
import {SchoolCanteenComponent} from "./school-canteen.component";
import { TuckShopComponent } from './tuck-shop/tuck-shop.component';
import {HeaderCModule} from "../header-c/header-c.module";




@NgModule({
  declarations: [
    SchoolCanteenComponent,
    TuckShopComponent,

  ],
    imports: [
        SharedModule,
        CommonModule,
        HeaderCModule
    ]
})
export class SchoolCanteenModule { }
