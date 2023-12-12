import {NgModule} from "@angular/core";
import {ButtonNativeComponent} from "./native/button-native/button-native.component";
import {ButtonModule} from "primeng/button";
import {ButtonControlComponent} from "./control/button-control/button-control.component";

@NgModule({
  declarations: [
    ButtonNativeComponent,
    ButtonControlComponent
  ],
  imports: [
    ButtonModule
  ],
  exports: [
    ButtonControlComponent
  ]
})
export class FeControlsModule {
}
