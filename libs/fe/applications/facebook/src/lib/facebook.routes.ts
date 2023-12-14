import {Route} from '@angular/router';

import {HomeComponent} from "./pages/home/home.component";
import {BoardComponent} from "./pages/board/board.component";

export const facebookRoutes: Route[] = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {component: HomeComponent, path: "home"},
  {component: BoardComponent, path: "board"}
];
