import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableItemsService {


  classesSchoolInfo:ClassSchool[] = [
    {
      id: '9А',
      lessons: {
        'Пн': ['Алгебра', 'Геометрия'],
        'Вт': ['Русск.яз.', 'Математика'],
        'Ср': ['Бел.лит.', 'Астрономия'],
        'Чт': ['Английский', 'Физра'],
        'Пт': ['Труд.об.', 'ДПЮ'],
        'Сб': ['Практика']
      }
    },
    {
      id: '9Б',
      lessons: {
        'Пн': ['Алгебра', 'Геометрия'],
        'Ср': ['Бел.лит.', 'Астрономия'],
        'Вт': ['Русск.яз.', 'Математика', 'fkg'],
        'Пт': ['Труд.об.', 'ДПЮ'],
        'Чт': ['Английский', 'Физра'],
        'Сб': ['Практика']
      }
    },
    {
      id: '8A',
      lessons: {
        'Пн': [],
        'Вт': ['f'],
        'Ср': [],
        'Чт': [],
        'Пт': [],
        'Сб': []
      }
    },
    {
      id: '8Б',
      lessons:{
        'Вт':['Русск.яз.', 'Математика'],
        'Чт':['Английский', 'Физра'],
        'Ср':['Бел.лит.', 'Астрономия'],
        'Пт':['Труд.об.', 'ДПЮ'],
        'Пн':['Алгебра', 'Геометрия'],
        'Сб':[]
      }
    },
    {
      id: '7А',
      lessons:{
        'Пн':['Алгебра', 'Геометрия'],
        'Вт':['Русск.яз.', 'Математика'],
        'Ср':['Бел.лит.', 'Астрономия'],
        'Чт':['Английский', 'Физра'],
        'Пт':['Труд.об.', 'ДПЮ'],
        'Сб':[]
      }
    },
    {
      id: '7Б',
      lessons:{
        'Пн':['Алгебра', 'Геометрия'],
        'Вт':['Русск.яз.', 'Математика'],
        'Ср':['Бел.лит.', 'Астрономия'],
        'Чт':['Английский', 'Физра'],
        'Пт':['Труд.об.', 'ДПЮ'],
        'Сб':[]
      }
    },
    {
      id: '6А',
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

  school:any = [
    {
      id: '11A',
      schedule: [
        {id:'1', day:'Пн', lessons:['Алгебра', 'Геометрия']},
        {id:'2', day:'Вт', lessons:['Алгебра', 'Геометрия']},
        {id:'3', day:'Ср', lessons:[]}
      ]
    },
    {
      id:'10',
      schedule: [
        {id:'1', day:'Пн', lessons:['Алгебра', 'Геометрия']},
        {id:'2', day:'Вт', lessons:[]},
        {id:'3', day:'Вт', lessons:['Алгебра', 'Геометрия']}
      ]
    }
  ]

  constructor() { }

  getLessons():any {
    return this.classesSchoolInfo;
    // checkingTheInside(this.school);
  };

}




function checkingTheInside(item:any) {
  let lessons:any = [];

  for(let lesson of item) {
    lessons.push(lesson);
    for(let i of lesson.schedule) {
      console.log(i);
      if(i.lessons.length<1) {
        i.lessons.push('-');
      }
    }
  }
  console.log(lessons);
  return lessons;

}

export interface ClassSchool {
  id:string,
  lessons:{[key:string]:string[]},
}
