import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app'
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', loadChildren: () => import('../pages/home/home.module').then((m) => m.HomeModule)},
      {path: 'profile', loadChildren: () => import('../pages/profile/profile.module').then((m) => m.ProfileModule)},
      {path: 'posts', loadChildren: () => import('../pages/post/post.module').then((m) => m.PostModule)},
      {path: 'chats', loadChildren: () => import('../pages/chats/chats.module').then((m) => m.ChatsModule)},
      {path: 'search', loadChildren: () => import('../pages/search/search.module').then((m) => m.SearchModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
