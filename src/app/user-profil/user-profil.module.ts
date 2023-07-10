import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../common/shared.module";
import {UserProfilComponent} from "./user-profil.component";



@NgModule({
  declarations: [
    UserProfilComponent,

  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class UserProfilModule { }
