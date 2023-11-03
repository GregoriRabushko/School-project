import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class FunctionalClassListService {

   classesLists: string[] = [];


  constructor( private http: HttpClient) { }


  addData (numberClasses: string) {
    this.classesLists.push(numberClasses);
    console.log(`${this.classesLists } service`)
  }

  getRes(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/classes')
  }

}

export interface DataObserver {

  "id": number,
  "name": string,
  "firstName": string,
  "surName": string,
  "email": string,
  "school": string,
  "classNumber":string,
  "address": {
  "street": string,
    "city": string
  }
}

export interface  MoreData {
  "classes": number,
  "from": string
}
