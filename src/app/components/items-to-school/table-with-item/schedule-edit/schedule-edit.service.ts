import { Injectable } from '@angular/core';
import {ClassSchool} from "../table-items.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScheduleEditService {

  user:Person|undefined

  constructor(
    private http:HttpClient,
  ) { }

  getInfoSchoolSchedule() {
    // this.http.get(`http://localhost:3000/itemsToSchool/${idClass}`).subscribe((value:any)=> {
    //   console.log( value);
    //   this.user = value[0];
    //   console.log( this.user);
    // });
  }


}
interface Person {
  id: number,
  firstName: string,
  lastName: string,
  surName: string,
  age: number,
  tel: number,
  addressId: string,
  classId: number,
  schoolId: string
}
