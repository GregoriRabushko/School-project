import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectSchoolListService {

  classInfo: ClassInfo = {
    chooseSubject:'',
    className:''
  };

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
    '7A',
    '7Б',
    '6A',
    '6Б',
    '5A',
    '5Б',
    '4A',
    '4Б',
    '3A',
    '3Б',
    '2A',
    '2Б',
    '1A',
    '1Б',
  ];

  students = [
    'Борозна Олег Александрович',
    'Гиро Егор Сергеевич',
    'Дробыш Владислав Павлович',
    'Египко Евгения Дмитриевна',
    'Земко Роман Никитич',
    'Казакова Анастасия Сергеевна',
    'Климентова София Маратовна',
    'Ковалёв Захар Николаевич',
    'Коваленок Данила Дмитриевич',
    'Красовская Екатерина Сергеевна',
    'Лелеш Иван Александрович',
    'Лицкевич Владислав Анатольевич',
    'Логовский Евгений Александрович',
    'Майсак Кирилл Александрович',
    'Макейчик Алексей Вячеславович',
    'Мелещеня Ульяна Андреевна'
  ]


  constructor() { }

  getSchoolObjects() {
    // return of(this.schoolObjects);
    return this.schoolObjects;
  }

  postClassInfo(subject:string,) {
      this.classInfo.chooseSubject = subject;
  }

  getClassInfo(classIndex: number, subjectIndex: number) {
    const subject = this.schoolObjects[subjectIndex];
    const className = this.studentsListNumber[classIndex];
    // TODO get class info by subject id
    const classInfo: ClassInfo = {
      chooseSubject: subject,
      className
    };
    return classInfo;
  }
  getStudentsListNumber() {
    console.log(this.studentsListNumber)
    return this.studentsListNumber;
  }


  postSchoolObjects(item:string) {
    this.schoolObjects.push(item);
    console.log(item);
  }

  postStudentsListNumber(item:string) {
    this.studentsListNumber.push(item)
  }

  deleteSchoolObjects(itemIndex: number) {
    this.schoolObjects.splice(itemIndex, 1)
  }

}

export interface ClassInfo {
  chooseSubject:string,
  className:string
}
