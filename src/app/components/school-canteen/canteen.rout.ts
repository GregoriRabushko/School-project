import {Routes} from "@angular/router";
import {FirstDishesComponent} from "./first-dishes/first-dishes.component";
import {HotDishesComponent} from "./hot-dishes/hot-dishes.component";
import {SideDishComponent} from "./side-dish/side-dish.component";
import {SaladsComponent} from "./salads/salads.component";

export const canteenRout: Routes =[
  { path: 'schoolCanteen/firstDishes', component: FirstDishesComponent },
  { path: 'schoolCanteen/hotDishes', component: HotDishesComponent },
  { path: 'schoolCanteen/sideDish', component: SideDishComponent },
  { path: 'schoolCanteen/salads', component: SaladsComponent },
]



