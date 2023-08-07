import { Component, OnInit } from '@angular/core';
import {SliderFood} from "./school-canteen.service";

@Component({
  selector: 'app-school-canteen',
  templateUrl: './school-canteen.component.html',
  styleUrls: ['./school-canteen.component.scss']
})
export class SchoolCanteenComponent implements OnInit {
  isTuckShopActive = false;

  slider:SliderFood[] = []

  constructor() { }

  ngOnInit(): void {
  }

  sliderLast() {

  }

  sliderNext() {

  }
}
