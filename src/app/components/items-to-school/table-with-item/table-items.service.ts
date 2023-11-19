import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableItemsService {


  classesSchoolInfo: ClassSchool[] = [
    {
      id: '9A',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'}, {room: '19', nameLesson: 'ДПЮ'}, {room: '19', nameLesson: 'ДПЮ'},],
        'Сб': [{room: '', nameLesson: 'Практика'},]
      }
    },
    {
      id: '9Б',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'},{room: '19', nameLesson: 'Физра'},{room: '19', nameLesson: 'Физра'},{room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'},],
        'Сб': [{room: '', nameLesson: 'Практика'},]
      }
    },
    {
      id: '8A',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'},],
        'Сб': [{room: '', nameLesson: ''}]
      }
    },
    {
      id: '8Б',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'}, {room: '19', nameLesson: 'ДПЮ'}, {room: '19', nameLesson: 'ДПЮ'},],
        'Сб': [{room: '', nameLesson: ''},]
      }
    },
    {
      id: '7А',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '', nameLesson: '-'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'},{room: '19', nameLesson: 'Физра'},{room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'}, {room: '19', nameLesson: 'ДПЮ'},],
        'Сб': [{room: '', nameLesson: ''},]
      }
    },
    {
      id: '7Б',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'},],
        'Сб': [{room: '', nameLesson: ''},]
      }
    },
    {
      id: '6А',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'},],
      }
    },
    {
      id: '6Б',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'},],
      }
    },
    {
      id: '5А',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'},],
      }
    },
    {
      id: '5Б',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'},],
      }
    },
    {
      id: '4А',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'},],
      }
    },
    {
      id: '4Б',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'},],
      }
    },
    {
      id: '3А',
      schedule: {
        'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Английский'},],
        'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
        'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'}, {room: '19', nameLesson: 'Астрономия'},],
        'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'}, {room: '19', nameLesson: 'Физра'},],
        'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'},],
      }
    },
  ];

  constructor() {
  }

  postStudentsListNumber(item:string) {
    // todo добавить сортировку при добавлении, что бы нумерация классов остовалась
    this.classesSchoolInfo.push({
      id:item,
      schedule: {
        'Пн': [{room: '', nameLesson: ''}],
        'Вт': [{room: '', nameLesson: ''}],
        'Ср': [{room: '', nameLesson: ''}],
        'Чт': [{room: '', nameLesson: ''}],
        'Пт': [{room: '', nameLesson: ''}],
        'Сб': [{room: '', nameLesson: ''}]
      }
    })
  }

  getLessons(): any {
    return this.classesSchoolInfo;
  };
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
