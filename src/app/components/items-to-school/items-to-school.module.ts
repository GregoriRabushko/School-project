import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemsToSchoolComponent} from "./items-to-school.component";
import {ListJinglesComponent} from "./list-jingles/list-jingles.component";
import {BulletinBoardComponent} from "./bulletin-board/bulletin-board.component";
import {TableWithItemComponent} from "./table-with-item/table-with-item.component";
import {TdCalssNameAndRoomNumberComponent} from "./table-with-item/td-calss-name-and-room-number/td-calss-name-and-room-number.component";
import {ItemsComponent} from "./table-with-item/items/items.component";
import {ScheduleEditComponent} from "./table-with-item/schedule-edit/schedule-edit.component";
import {AddClassToScheduleComponent} from "./table-with-item/add-class-to-schedule/add-class-to-schedule.component";
import {SharedModule} from "../../common/shared.module";
import {FormsModule} from "@angular/forms";
import {HeaderCModule} from "../header-c/header-c.module";




@NgModule({
  declarations: [
    ItemsToSchoolComponent,
    ListJinglesComponent,
    BulletinBoardComponent,
    TableWithItemComponent,
    TdCalssNameAndRoomNumberComponent,
    ItemsComponent,
    ScheduleEditComponent,
    AddClassToScheduleComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        HeaderCModule,
    ]
})
export class ItemsToSchoolModule { }
