import {Component} from "@angular/core";
import {FeFormsModule} from "@social-media/fe/forms";

@Component({
  standalone: true,
  selector: "social-media-facebook-home",
  templateUrl: "./home.component.html",
  imports: [
    FeFormsModule
  ],
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
}
