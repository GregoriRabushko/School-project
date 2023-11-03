import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) { }

   ngOnInit() {
  }

}
