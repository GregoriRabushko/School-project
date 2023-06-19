import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-with-item',
  templateUrl: './table-with-item.component.html',
  styleUrls: ['./table-with-item.component.scss']
})
export class TableWithItemComponent implements OnInit {

  week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  constructor() { }

  ngOnInit(): void {
  }

}
