import { Component, OnInit } from '@angular/core';
import {DishesInfo} from "../dishes-category/dishes.component";
import { dishesInfoCategory} from "../dishes-info";

@Component({
  selector: 'app-home-canteen',
  templateUrl: './home-canteen.component.html',
  styleUrls: ['./home-canteen.component.scss']
})
export class HomeCanteenComponent implements OnInit {

  dishesInfo:DishesInfo[] = dishesInfoCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
