import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ButtonModule} from "primeng/button";

@Component({
  standalone: true,
  imports: [RouterModule, ButtonModule],
  selector: 'social-media-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'facebook';
}
