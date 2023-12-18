import {Route} from '@angular/router';

import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {BoardComponent} from "./pages/board/board.component";

export const facebookRoutes: Route[] = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {component: LoginComponent, path: "login"},
  {component: HomeComponent, path: "home"},
  {component: BoardComponent, path: "board"}
];
