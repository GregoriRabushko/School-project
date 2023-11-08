import { Component, OnInit } from '@angular/core';
import { SchoolCanteenService } from "./school-canteen.service";
import {HeaderInfo} from "../header-c/header-c.component";
import {Router} from '@angular/router';
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


  constructor(  private router: Router) { }

  ngOnInit(): void {
    // this.router.navigate(['frame/schoolCanteen/homeCanteen']);
  }
}
