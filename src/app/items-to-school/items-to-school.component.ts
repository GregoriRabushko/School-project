import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-items-to-school',
  templateUrl: './items-to-school.component.html',
  styleUrls: ['./items-to-school.component.scss']
})
export class ItemsToSchoolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   plugins: [dayGridPlugin]
  // };

}
