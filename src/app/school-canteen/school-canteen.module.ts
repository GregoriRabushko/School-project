import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../common/shared.module";
import {SchoolCanteenComponent} from "./school-canteen.component";
import { TuckShopComponent } from './tuck-shop/tuck-shop.component';



@NgModule({
  declarations: [
    SchoolCanteenComponent,
    TuckShopComponent,

  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class SchoolCanteenModule { }
