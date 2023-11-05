import { Component, OnInit } from '@angular/core';
import {HeaderInfo} from "../header-c/header-c.component";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  infoToHeader: HeaderInfo = {
    imag: 'url("/assets/img/img-header-slider/class-room.jpeg")',
    textP: 'Новости'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
