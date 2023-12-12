import {NgModule} from "@angular/core";
import {FeControlsModule} from "@social-media/fe/controls";
import {LoginFormComponent} from "./login-form/login-form.component";

@NgModule({
  imports: [
    FeControlsModule
  ],
  declarations: [
    LoginFormComponent
  ],
  exports: [
    LoginFormComponent
  ]
})
export class FeFormsModule {
}
