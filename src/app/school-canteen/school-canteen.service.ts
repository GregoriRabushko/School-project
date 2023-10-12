import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../students-list/select-school-list/interface";

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
    },
    {
      id: 5,
      name: "Овсянка",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoklsnOJnkdEm3AeBsG2qhKDfLQW0kd0n_DQ&usqp=CAU",
      isActivated: false
    }
  ]

  // menu:any = {
  //   "Пн": [{foodId: 1}, {foodId: 3}],
  //   "Вт": [{foodId: 2}, {foodId: 4}],
  //   "Ср": [{foodId: 1}, {foodId: 4}],
  //   "Чт": [{foodId: 4}, {foodId: 3}],
  //   "Пт": [{foodId: 3}, {foodId: 2}, {foodId: 1}],
  //   "Сб": [{foodId: 2}]
  // }

  constructor( readonly http:HttpClient) { }

  getFoodInfo():any {
    const food = [];
    return this.http.get('assets/school-info-test-db/canteen.json').
    pipe(map((data:any)=>{
      let usersList = data["food"];

      console.log(usersList)
      return food.push(usersList);
    }));
  }


}


export interface SliderFood {
  id: number,
  name: string,
  url: string,
  isActivated: boolean
}
