import {NgModule} from "@angular/core";
import {ButtonNativeComponent} from "./native/button-native/button-native.component";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonControlComponent} from "./control/button-control/button-control.component";
import {InputTextControlComponent} from "./control/input-text-control/input-text-control.component";
import {InputTextNativeComponent} from "./native/input-text-native/input-text-native.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ButtonNativeComponent,
    InputTextNativeComponent,
    ButtonControlComponent,
    InputTextControlComponent
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    ButtonControlComponent,
    InputTextControlComponent
  ]
})
export class FeControlsModule {
}
