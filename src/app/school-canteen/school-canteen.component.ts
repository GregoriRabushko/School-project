import { Component, OnInit } from '@angular/core';
import { SchoolCanteenService, SliderFood} from "./school-canteen.service";

@Component({
  selector: 'app-school-canteen',
  templateUrl: './school-canteen.component.html',
  styleUrls: ['./school-canteen.component.scss']
})
export class SchoolCanteenComponent implements OnInit {
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
