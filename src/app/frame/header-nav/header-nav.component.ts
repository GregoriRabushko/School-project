import { Component, OnInit } from '@angular/core';
import {InfoToMenu} from "./drop-menu/drop-menu.component";

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  infoToMenu:InfoToMenu = {
    aText: 'УЧИТЕЛЬСКАЯ',
    liContent:[
      {name: 'Класному руководителю', rout: '#'},
      {name: 'Учителю-предметнику', rout: '#'},
      {name: 'Готовимся к педсовету', rout: '#'},
      {name: 'Рассписание работников', rout: 'scheduleWorkers'},
      {name: 'Единый день информировани', rout: '#'},
      {name: 'Школа молодого учителя', rout: '#'},
      ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
