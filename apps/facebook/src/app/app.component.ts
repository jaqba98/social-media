import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeFormsModule} from "@social-media/fe/forms";

@Component({
  standalone: true,
  imports: [RouterModule, FeFormsModule],
  selector: 'social-media-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'facebook';
}
