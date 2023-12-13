import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FeFormsModule} from "@social-media/fe/forms";

@NgModule({
  imports: [RouterModule, FeFormsModule],
  exports: [RouterModule, FeFormsModule]
})
export class FacebookModule {
}
