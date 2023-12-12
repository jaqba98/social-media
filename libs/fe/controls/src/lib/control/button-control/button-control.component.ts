import {Component, Input} from "@angular/core";

@Component({
  selector: "social-media-button-control",
  templateUrl: "./button-control.component.html",
  styleUrls: ["./button-control.component.scss"]
})
export class ButtonControlComponent {
  @Input() label: string = "";
}
