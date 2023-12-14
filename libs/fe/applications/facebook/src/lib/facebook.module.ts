import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {FeFormsModule} from "@social-media/fe/forms";
import {HomeComponent} from "./pages/home/home.component";
import {BoardComponent} from "./pages/board/board.component";

@NgModule({
  imports: [
    RouterModule,
    FeFormsModule
  ],
  declarations: [
    HomeComponent,
    BoardComponent
  ],
  exports: [
    RouterModule
  ]
})
export class FacebookModule {
}
