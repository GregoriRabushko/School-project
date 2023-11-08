import { Component, OnInit } from '@angular/core';
import {HeaderInfo} from "../../header-c/header-c.component";
import {DishesInfo} from "../dishes-category/dishes.component";
import {dishesSideInfo} from "../dishes-info";

@Component({
  selector: 'app-side-dish',
  templateUrl: './side-dish.component.html',
  styleUrls: ['./side-dish.component.scss']
})
export class SideDishComponent implements OnInit {

  infoToHeader: HeaderInfo = {
    imag: 'url("/assets/img/img-header-slider/Cafe-Cecilia.webp")',
    textP: 'Столовая'
  }

  dishesSide:DishesInfo[] = dishesSideInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
