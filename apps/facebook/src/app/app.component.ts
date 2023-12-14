import {Component} from '@angular/core';

import {FacebookModule} from "@social-media/fe/facebook";

@Component({
  standalone: true,
  imports: [FacebookModule],
  selector: 'social-media-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
