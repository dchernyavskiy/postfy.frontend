import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "./post.component";
import {PostResolver} from "./resolvers/post.resolver";

const routes: Routes = [
  {path: ':id', component: PostComponent, pathMatch: 'full'}
  // {path: ':id', component: PostComponent, pathMatch: 'full', resolve: {post: PostResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
