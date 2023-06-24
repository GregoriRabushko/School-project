import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-with-item',
  templateUrl: './table-with-item.component.html',
  styleUrls: ['./table-with-item.component.scss']
})
export class TableWithItemComponent implements OnInit {

    week:string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    selectDay = '';
  @Input() openWindowAddSchoolClassName = false;

  // classesSchoolInfo:ClassesSchoolInfo = {
  //   'classes':['11A', '10A','9A','8A','7A','6A','5A','4A','3A'],
  //   'items':[]
  // };
  classSchool:ClassSchool = {
    id: '',
    lessons:{
      'Пн':[],
      'Вт':[],
      'Ср':[],
      'Чт':[],
      'Пт':[],
      'Сб':[]
    }
};

  classesSchoolInfo:ClassSchool[] = [

    {
      id: '11A',
      lessons:{
        'Пн':['Английский', 'Физра'],
        'Вт':['Русск.яз.', 'Математика'],
        'Ср':['Бел.лит.', 'Астрономия'],
        'Чт':['Алгебра', 'Геометрия'],
        'Пт':['Труд.об.', 'ДПЮ'],
        'Сб':['Медицина', 'История']
      }
    },
    {
      id: '10B',
      lessons:{
        'Пн':['Русск.яз.', 'Математика'],
        'Вт':['Английский', 'Физра'],
        'Ср':['Бел.лит.', 'Астрономия'],
        'Чт':['Алгебра', 'Геометрия'],
        'Пт':['Труд.об.', 'ДПЮ'],
        'Сб':['Медицина', 'История']
      }
    },
    {
      id: '3A',
      lessons:{
        'Пн':['Алгебра', 'Геометрия'],
        'Вт':['Русск.яз.', 'Математика'],
        'Ср':['Бел.лит.', 'Астрономия'],
        'Чт':['Английский', 'Физра'],
        'Пт':['Труд.об.', 'ДПЮ'],
        'Сб':['Медицина', 'История']
      }
    }



  ];

  showItemsWindow = false;
  selectedIndex?: number;
  constructor() { }

  ngOnInit(): void {

  }


  showItemsMenu() {
    this.showItemsWindow = true;
  }

  selectRow(index: number) {
    this.selectDay = this.week[index];

    if (this.selectedIndex === index) {
      this.selectedIndex = undefined;
    } else {
      this.selectedIndex = index;
    }
  }

  checkingTheStateOfAVariableClassList(item:boolean) {
    this.openWindowAddSchoolClassName = item;
  }
}
export interface ClassSchool {
  id:string,
  lessons:{[key:string]:string[]},
}
