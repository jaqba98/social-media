import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {FeFormsModule} from "@social-media/fe/forms";
import {HomeComponent} from "./pages/home/home.component";

@NgModule({
  imports: [
    RouterModule,
    FeFormsModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    RouterModule
  ]
})
export class FacebookModule {
}
