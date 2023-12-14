import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {facebookRoutes} from "@social-media/fe/facebook";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(facebookRoutes)]
};
