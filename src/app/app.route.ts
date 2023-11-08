import {Routes} from "@angular/router";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";



export const appRoute: Routes =[
  { path: 'authorization', component: AuthorizationComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'registration', component: RegistrationComponent },
];
