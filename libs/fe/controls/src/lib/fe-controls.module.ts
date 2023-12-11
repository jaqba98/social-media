import {NgModule} from "@angular/core";
import {ButtonNativeComponent} from "./native/button-native/button-native.component";
import {ButtonModule} from "primeng/button";
import {ButtonComponent} from "./control/button/button.component";

@NgModule({
  declarations: [
    ButtonNativeComponent,
    ButtonComponent
  ],
  imports: [
    ButtonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class FeControlsModule {
}
