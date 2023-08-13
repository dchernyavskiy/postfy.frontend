import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: MyProfileComponent
  },
  {
    path: ':id', pathMatch: 'full', component: ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
