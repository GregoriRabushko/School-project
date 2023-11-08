import { Component, OnInit } from '@angular/core';
import {HeaderInfo} from "../../header-c/header-c.component";
import {dishesHotInfo} from "../dishes-info";
import {DishesInfo} from "../dishes-category/dishes.component";
import {Routes} from "@angular/router";

@Component({
  selector: 'app-hot-dishes',
  templateUrl: './hot-dishes.component.html',
  styleUrls: ['./hot-dishes.component.scss']
})
export class HotDishesComponent implements OnInit {

  infoToHeader: HeaderInfo = {
    imag: 'url("/assets/img/img-header-slider/Cafe-Cecilia.webp")',
    textP: 'Столовая'
  }

  dishesHot:DishesInfo[] = dishesHotInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
