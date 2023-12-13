import {Component, Input} from "@angular/core";

@Component({
  selector: "social-media-input-text-native",
  templateUrl: "./input-text-native.component.html",
  styleUrls: ["./input-text-native.component.scss"]
})
export class InputTextNativeComponent {
  @Input() value: string = "";
}
