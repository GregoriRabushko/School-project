import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, scan, Subscription, take, toArray} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from "rxjs/operators";
import {User} from "./interface";
import {schoolObjects, studentsListNumber, students} from "src/assets/school-info-test-db/info-school"
import {ClassSchool} from "../items-to-school/table-with-item/table-items.service";

@Injectable({
  providedIn: 'root'
})
export class SelectSchoolListService {


  constructor(
    private http: HttpClient
  ) {
  }

  getClassInfo(classIndex: number, subjectIndex: number) {
    const subject = schoolObjects[subjectIndex];
    const className = studentsListNumber[classIndex];
    // TODO get class info by subject id
    const classInfo: ClassInfo = {
      chooseSubject: subject,
      className: className
    };
    return classInfo;
  }

  postSchoolObjects(item: string) {
    schoolObjects.push(item);
    console.log(item);
  }


  getLessons(): any {
   return this.http.get('http://localhost:3000/itemsToSchool')
  }


  postStudentsListNumber(item: ClassSchool) {
    return this.http.post<ClassSchool[]>('http://localhost:3000/addList', item);

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

  deleteSchoolObjects(itemIndex: number) {
    schoolObjects.splice(itemIndex, 1)
  }

  getSchoolSubjects() {
    return schoolObjects
  }
}

export interface ClassInfo {
  chooseSubject: string,
  className: string
}

export interface InfoClass {
  [key: number]: [string]
}

