import { Component, OnInit } from '@angular/core';
import {HeaderInfo} from "../../header-c/header-c.component";
import {dishesFirstInfo} from "../dishes-info";
import {DishesInfo} from "../dishes-category/dishes.component";


@Component({
  selector: 'app-first-dishes',
  templateUrl: './first-dishes.component.html',
  styleUrls: ['./first-dishes.component.scss']
})
export class FirstDishesComponent implements OnInit {

  infoToHeader: HeaderInfo = {
    imag: 'url("/assets/img/img-header-slider/Cafe-Cecilia.webp")',
    textP: 'Столовая'
  }

  dishesFirst:DishesInfo[] = dishesFirstInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
