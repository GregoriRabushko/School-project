import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable, Subscription} from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import {map} from "rxjs/operators";
import {User} from "./interface";
import {schoolObjects, studentsListNumber, students} from "src/assets/school-info-test-db/info-school"

@Injectable({
  providedIn: 'root'
})
export class SelectSchoolListService {

  classInfo: ClassInfo = {
    chooseSubject: '',
    className: ''
  };



  constructor(
    private http: HttpClient
  ){}

  getClassInfo(classIndex: number, subjectIndex: number) {
    const subject = schoolObjects[subjectIndex];
    const className = studentsListNumber[classIndex];
    // TODO get class info by subject id
    const classInfo: ClassInfo = {
      chooseSubject: subject,
      className
    };
    return classInfo;
  }

  getStudentsListNumber() {
    console.log(studentsListNumber)
    return studentsListNumber;
  }


  postSchoolObjects(item: string) {
    schoolObjects.push(item);
    console.log(item);
  }

  postStudentsListNumber(item: string) {
    studentsListNumber.push(item)
  }

  deleteSchoolObjects(itemIndex: number) {
    schoolObjects.splice(itemIndex, 1)
  }


  getSchoolSubjects() {
    return schoolObjects
  }




  // ================= просто пробовал через observer ===========
  getInfo():Observable<User[]> {
    return this.http.get('http://localhost:3000/classes').
    pipe(map((data:any)=>{
    let usersList = data["classes"];

    // console.log(usersList)
    return usersList.map(function(user: any): User {
      return new User(user.id, user.name);
    });
  }));
  }

  // getSchoolSubjects():Observable<User[]> {
  //   return this.http.get('assets/school-info-test-db/infoprostotak.json').
  //     pipe(map((data:any)=>{
  //       let schoolSubject = data["schoolSubjects"];
  //
  //       return schoolSubject.map(function(item:any):User {
  //         return new User(item.id, item.name);
  //     });
  //   }));
  // }
}

export interface ClassInfo {
  chooseSubject:string,
  className:string
}

export interface InfoClass {
  [key:number]:[string]
}

