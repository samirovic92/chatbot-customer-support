import {Routes} from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadComponent: () => import("./chat/pages/chat-home/chat-home.component")
      .then((m) => m.ChatHomeComponent)
  }
];
