import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderInfo} from "../header-c/header-c.component";

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

 infoToHeader:HeaderInfo = {
   imag: 'url("/assets/img/img-header-slider/profile.jpg")',
   textP: 'Профиль'
 }
  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) { }

   ngOnInit() {
  }

}
