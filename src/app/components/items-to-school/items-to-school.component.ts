import { Component, OnInit } from '@angular/core';
import {HeaderInfo} from "../header-c/header-c.component";

@Component({
  selector: 'app-items-to-school',
  templateUrl: './items-to-school.component.html',
  styleUrls: ['./items-to-school.component.scss']
})
export class ItemsToSchoolComponent implements OnInit {

  headerInfo:HeaderInfo = {
    imag: 'url("/assets/img/img-header-slider/school.webp")',
    textP: 'Рассписание занятий'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
