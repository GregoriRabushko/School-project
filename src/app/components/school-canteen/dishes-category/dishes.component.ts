import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dishes-category',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  @Input() dishesInfo = {
    img: '',
    textP: '',
    routerLink: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}

export interface DishesInfo {
  img:string,
  textP:string,
  routerLink:string
}
