import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {FeFormsModule} from "@social-media/fe/forms";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {BoardComponent} from "./pages/board/board.component";

@NgModule({
  imports: [
    RouterModule,
    FeFormsModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    BoardComponent
  ],
  exports: [
    RouterModule
  ]
})
export class FacebookModule {
}
