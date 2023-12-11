import {Component, Input} from "@angular/core";

@Component({
  selector: "social-media-button-native",
  templateUrl: "./button-native.component.html",
  styleUrls: ["./button-native.component.scss"]
})
export class ButtonNativeComponent {
  @Input() label: string = "";
}
