import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolCanteenService {
  slider:SliderFood[] = [
    {
      id: 1,
      name: "Суп: 'Борщ'",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs1zJfWZsJiY6-pT5JonTV_Bptcrrefs-kwg&usqp=CAU",
      isActivated: false
    },
    {
      id: 2,
      name: "Пюре с катлетой",
      url: "https://img-api.yumapos.ru/image/crop/256x256/dd1a8955-5b22-fbda-7f23-d460bf7b9712.jpg",
      isActivated: false
    },
    {
      id: 3,
      name: "Чай с булочкой",
      url: "https://s.pfst.net/2010.09/2930631362bef09a9a21c917b7fcbe1fd026d36610_b.jpg",
      isActivated: false
    },
    {
      id: 4,
      name: "Сок апельсиновый",
      url: "https://www.gastronom.ru/binfiles/images/20141015/b7492a6d.jpg",
      isActivated: false
    }
  ]

  constructor() { }




}


export interface SliderFood {
  id: number,
  name: string,
  url: string,
  isActivated: boolean
}
