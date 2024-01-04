import {Component, Input} from "@angular/core";

@Component({
  selector: "social-media-button-native",
  templateUrl: "./button-native.component.html"
})
export class ButtonNativeComponent {
  @Input() label: string = "";
}
