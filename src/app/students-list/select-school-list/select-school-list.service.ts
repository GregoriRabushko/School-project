import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectSchoolListService {

  chosenSubject = '';



  schoolObjects: string[] = [
    'Математика',
    'География',
    'Физика',
    'Химия',
    'Русский язык',
    'Русская литература',
    'Беларусский язык',
    'Беларусская литература',
    'Иностранный язык',
    'Информатика',
    'Физическая культура',
    'Допризывная подготовка',
    'История',
    'Астрономия',
    'Обществоведение'
  ];

  studentsListNumber:string[] = [
    '11A',
    '11Б',
    '10A',
    '10Б',
    '9A',
    '9Б',
    '8A',
    '8Б',
  ]


  constructor() { }

  getSchoolObjects() {
    return this.schoolObjects;
  }

  addSchoolObjects(item:string) {
    this.schoolObjects.push(item);
  }

  getStudentsListNumber() {
    return this.studentsListNumber;
  }

  chooseSubject(index:number) {
    this.chosenSubject = this.schoolObjects[index];
    return this.chosenSubject;
  }


  postSchoolObjects(item:string) {
    this.schoolObjects.push(item);
    console.log(item);
  }

  postStudentsListNumber(item:string) {
    this.studentsListNumber.push(item)
  }



}
