import {Component, Input, OnInit} from '@angular/core';
import {
  TableItemsService,
  ClassSchool,
  Lessons
} from 'src/app/components/items-to-school/table-with-item/table-items.service';

@Component({
  selector: 'app-table-with-item',
  templateUrl: './table-with-item.component.html',
  styleUrls: ['./table-with-item.component.scss']
})
export class TableWithItemComponent implements OnInit {
    week:string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    classesSchoolInfo:ClassSchool[] = [];
  @Input() showOrHideScheduleEdit = false;
  scheduleClass:ClassSchool = {
    id: '',
    schedule: {
      'Пн': [{room: '', nameLesson: ''}],
      'Вт': [{room: '', nameLesson: ''}],
      'Ср': [{room: '', nameLesson: ''}],
      'Чт': [{room: '', nameLesson: ''}],
      'Пт': [{room: '', nameLesson: ''}],
      'Сб': [{room: '', nameLesson: ''}]
    }
  };
  constructor(private tableItemsService: TableItemsService) { }

  ngOnInit(): void {
    this.classesSchoolInfo = this.tableItemsService.getLessons();

  }

  editingSchedule(item:ClassSchool) {
    this.scheduleClass = item;
    this.showOrHideScheduleEdit = true;
  }

  showOrHideScheduleEditFunc(item:boolean) {
    this.showOrHideScheduleEdit = item;
  }

  // showItemsMenu() {
  //   this.showItemsWindow = true;
  // }
  //
  // selectRow(index: number) {
  //   this.selectDay = this.week[index];
  //
  //   if (this.selectedIndex === index) {
  //     this.selectedIndex = undefined;
  //   } else {
  //     this.selectedIndex = index;
  //   }
  // }
  //
  // checkingTheStateOfAVariableClassList(item:boolean) {
  //   this.openWindowAddSchoolClassName = item;
  //     this.classesId.push(this.classId);
  //     console.log(this.classId);
  //     console.log(this.classesId);
  //     // console.log(this.classSchool.id);
  // }
  //
  // addItemsToSchedule() {
  //
  // }
  //
  // clickOnTable(item:any) {
  //   console.log(item);
  // }

}
