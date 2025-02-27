import {ApplicationConfig, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {appReducers} from './core/store/appReducers';
import * as chatEffects from './chat/state/chat.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideNoopAnimations(),
    provideStore(appReducers),
    provideEffects(chatEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })]
};
