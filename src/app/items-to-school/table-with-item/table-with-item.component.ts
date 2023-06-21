import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-with-item',
  templateUrl: './table-with-item.component.html',
  styleUrls: ['./table-with-item.component.scss']
})
export class TableWithItemComponent implements OnInit {

  classesSchoolInfo:ClassesSchoolInfo = {
    'week': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    'classes':['11A', '10A','9A','8A','7A','6A','5A','4A','3A'],
    'items':[]
  };
  showItemsWindow = false;
  constructor() { }

  ngOnInit(): void {
  }


  showItemsMenu() {
    this.showItemsWindow = true;
  }
}

interface ClassesSchoolInfo {
  'week':string[],
  'classes':string[],
  'items':string[]
}
