import {Route} from '@angular/router';

import {HomeComponent} from "./pages/home/home.component";

export const facebookRoutes: Route[] = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {component: HomeComponent, path: "home"}
];
