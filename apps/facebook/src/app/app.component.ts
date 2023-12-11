import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeControlsModule} from "@social-media/fe/controls";

@Component({
  standalone: true,
  imports: [RouterModule, FeControlsModule],
  selector: 'social-media-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'facebook';
}
