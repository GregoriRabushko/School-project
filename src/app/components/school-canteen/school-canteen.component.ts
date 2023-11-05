import { Component, OnInit } from '@angular/core';
import { SchoolCanteenService, SliderFood} from "./school-canteen.service";
import {HeaderInfo} from "../header-c/header-c.component";
import {DishesInfo} from "./dishes-category/dishes.component";

@Component({
  selector: 'app-school-canteen',
  templateUrl: './school-canteen.component.html',
  styleUrls: ['./school-canteen.component.scss']
})
export class SchoolCanteenComponent implements OnInit {
  infoToHeader: HeaderInfo = {
    imag: 'url("/assets/img/img-header-slider/Cafe-Cecilia.webp")',
    textP: 'Столовая'
  }

  dishesInfo:DishesInfo[] = [{
    img: 'assets/img/canteen/category-dish/first-dishes.jpg',
    textP: 'ПЕРВЫЕ БЛЮДА',
    routerLink: 'firstDishes'
  },{
    img: 'assets/img/canteen/category-dish/second-dishes.jpg',
    textP: 'ГОРЯЧИЕ БЛЮДА',
    routerLink: 'hotDishes'
  },{
    img: 'assets/img/canteen/category-dish/dishes3.jpg',
    textP: 'ГАРНИРЫ',
    routerLink: 'sideDish'
  },{
    img: 'assets/img/canteen/category-dish/dishes4.jpg',
    textP: 'САЛАТЫ',
    routerLink: 'salads'
  },
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
