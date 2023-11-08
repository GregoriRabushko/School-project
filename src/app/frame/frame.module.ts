import {NgModule} from "@angular/core";
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {FrameComponent} from "./frame.component";
import {HeaderNavComponent} from "./header-nav/header-nav.component";
import {frameRout} from "./frame.rout";
import { FooterComponent } from './footer/footer.component';
import {HeaderCModule} from "../components/header-c/header-c.module";
import { DropMenuComponent } from './header-nav/drop-menu/drop-menu.component';
import {NgForOf, NgIf} from "@angular/common";
import {ComponentsModule} from "../components/components.module";
import {SchoolCanteenModule} from "../components/school-canteen/school-canteen.module";




@NgModule({
  declarations: [
    FrameComponent,
    HeaderNavComponent,
    FooterComponent,
    DropMenuComponent

  ],
  imports: [
    RouterOutlet,
    RouterModule.forRoot(frameRout),
    HeaderCModule,
    ComponentsModule,
    NgForOf,
    NgIf,
    SchoolCanteenModule,


  ],
  providers: [],
    exports: [
        FrameComponent,
        FooterComponent
    ],
  bootstrap: []
})
export class FrameModule { }
