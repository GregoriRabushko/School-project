import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared.module";
import {SchoolCanteenComponent} from "./school-canteen.component";
import {HeaderCModule} from "../header-c/header-c.module";
import { DishesComponent } from './dishes-category/dishes.component';
import {RouterLink, RouterLinkWithHref, RouterModule} from "@angular/router";
import {schoolCanteenRout, itemsRouts} from "./school-canteen.rout";
import { FirstDishesComponent } from './first-dishes/first-dishes.component';
import { HotDishesComponent } from './hot-dishes/hot-dishes.component';
import { SideDishComponent } from './side-dish/side-dish.component';
import { SaladsComponent } from './salads/salads.component';
import { HomeCanteenComponent } from './home-canteen/home-canteen.component';



@NgModule({
  declarations: [
    SchoolCanteenComponent,
    DishesComponent,
    FirstDishesComponent,
    HotDishesComponent,
    SideDishComponent,
    SaladsComponent,
    HomeCanteenComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    HeaderCModule,
    RouterLink,
    RouterLinkWithHref,
    RouterModule.forRoot(schoolCanteenRout),
  ],
  providers: [],
  exports: [

  ],
  bootstrap: []
})
export class SchoolCanteenModule { }
