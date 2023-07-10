import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-with-item',
  templateUrl: './table-with-item.component.html',
  styleUrls: ['./table-with-item.component.scss']
})
export class TableWithItemComponent implements OnInit {
    week:string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    classesId:string[] =[];
    @Input()classId = '';
    selectDay = '';
    addItems = true;
    showItemsWindow = false;
    selectedIndex?: number;
  @Input() openWindowAddSchoolClassName = false;

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
        'Ср':[],
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
        'Сб':[]
      }
    }
  ];

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
      this.classesId.push(this.classId);
      console.log(this.classId);
      console.log(this.classesId);
      // console.log(this.classSchool.id);
  }

  addItemsToSchedule() {

  }

}
export interface ClassSchool {
  id:string,
  lessons:{[key:string]:string[]},
}
