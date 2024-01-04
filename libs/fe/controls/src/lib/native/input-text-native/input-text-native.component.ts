import {Component, Input} from "@angular/core";

@Component({
  selector: "social-media-input-text-native",
  templateUrl: "./input-text-native.component.html"
})
export class InputTextNativeComponent {
  @Input() value: string = "";
}
