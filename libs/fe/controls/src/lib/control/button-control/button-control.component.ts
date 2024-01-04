import {Component, Input} from "@angular/core";

@Component({
  selector: "social-media-button-control",
  templateUrl: "./button-control.component.html"
})
export class ButtonControlComponent {
  @Input() label: string = "";
}
