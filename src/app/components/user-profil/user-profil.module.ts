import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../common/shared.module";
import {UserProfilComponent} from "./user-profil.component";
import {HeaderCModule} from "../header-c/header-c.module";



@NgModule({
  declarations: [
    UserProfilComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    HeaderCModule
  ]
})
export class UserProfilModule { }
