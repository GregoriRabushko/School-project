import {Routes} from "@angular/router";
import {FirstDishesComponent} from "./first-dishes/first-dishes.component";
import {HotDishesComponent} from "./hot-dishes/hot-dishes.component";
import {SideDishComponent} from "./side-dish/side-dish.component";
import {SaladsComponent} from "./salads/salads.component";
import {SchoolCanteenComponent} from "./school-canteen.component";
import {HomeCanteenComponent} from "./home-canteen/home-canteen.component";
import {FrameComponent} from "../../frame/frame.component";


export const itemsRouts: Routes = [
  {
    path: '',
    component: SchoolCanteenComponent,
    children: [
      { path: '', component: HomeCanteenComponent },
      { path: 'firstDishes', component: FirstDishesComponent },
      { path: 'hotDishes', component: HotDishesComponent },
      { path: 'sideDish', component: SideDishComponent },
      { path: 'salads', component: SaladsComponent },
    ]
  }
]

export const schoolCanteenRout: Routes =[
  { path: 'schoolCanteen', component: FrameComponent, children: itemsRouts },
]



