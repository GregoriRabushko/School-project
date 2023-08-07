import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-canteen',
  templateUrl: './school-canteen.component.html',
  styleUrls: ['./school-canteen.component.scss']
})
export class SchoolCanteenComponent implements OnInit {
  isTuckShopActive = false;

  slider:SliderFood = {
    1: true,
    2: false,
    3: false,
    4: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  sliderLast() {

  }

  sliderNext() {

  }
}


export interface SliderFood {
  [key:number]: boolean
}
