import { Component, OnInit } from '@angular/core';
import {HeaderInfo} from "../../header-c/header-c.component";
import {DishesInfo} from "../dishes-category/dishes.component";
import {dishesSaladsInfo} from "../dishes-info";

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.scss']
})
export class SaladsComponent implements OnInit {

  infoToHeader: HeaderInfo = {
    imag: 'url("/assets/img/img-header-slider/Cafe-Cecilia.webp")',
    textP: 'Столовая'
  }

  dishesSalads:DishesInfo[] = dishesSaladsInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
