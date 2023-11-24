import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TableItemsService {


  idClass: string = '';
  scheduleDay: string = '';
  indexNameLesson: number = 0;


  constructor(
    private http: HttpClient,
  ) {
  }

  // deleteLessonSchedule() {
  //   this.classesSchoolInfo.forEach( item => {
  //     if(item.id === this.idClass) {
  //       item.schedule[this.scheduleDay].splice(this.indexNameLesson,1)
  //       // item.schedule[this.scheduleDay][this.indexNameLesson].room = '';
  //       // item.schedule[this.scheduleDay][this.indexNameLesson].nameLesson = '-';
  //      console.log(item.schedule[this.scheduleDay][this.indexNameLesson], item);
  //     }
  //   })
  // }

  postStudentsListNumber(item: ClassSchool) {
   return this.http.post('http://localhost:3000/selectList', item);

    // todo добавить сортировку при добавлении, что бы нумерация классов остовалась
    // this.classesSchoolInfo.push({
    //   id:item,
    //   schedule: {
    //     'Пн': [{room: '', nameLesson: ''}],
    //     'Вт': [{room: '', nameLesson: ''}],
    //     'Ср': [{room: '', nameLesson: ''}],
    //     'Чт': [{room: '', nameLesson: ''}],
    //     'Пт': [{room: '', nameLesson: ''}],
    //     'Сб': [{room: '', nameLesson: ''}]
    //   }
    // })
  }


  getLessons(): any {
    return this.http.get('http://localhost:3000/itemsToSchool');
  }
}

export interface ClassSchool {
  id: string,
  schedule: {
    [key: string]: Lessons[]
  }
};

export interface Lessons {
  room: string,
  nameLesson: string
}
