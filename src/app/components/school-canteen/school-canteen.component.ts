import { Component, OnInit } from '@angular/core';
import { SchoolCanteenService, SliderFood} from "./school-canteen.service";
import {HeaderInfo} from "../header-c/header-c.component";

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
  isTuckShopActive = false;

  slider:any[] = []

  constructor(readonly foodService:SchoolCanteenService) { }

  ngOnInit(): void {
    this.getFoodInfo();
  }

  getFoodInfo() {
    this.slider = this.foodService.getFoodInfo().subscribe((data:any)=>{this.slider=data});
    // console.log(this.slider)
  }

  sliderLast() {

  }

  sliderNext() {

  }
}
