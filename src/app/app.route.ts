import {Routes} from "@angular/router";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {FrameComponent} from "./frame/frame.component";


export const appRoute: Routes =[
  { path: '', component: FrameComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
];
