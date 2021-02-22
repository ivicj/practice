import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './modules/comments/comments.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersComponent } from './modules/users/users.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  // { path: 'comments', component: CommentsComponent },
  { path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  { path: 'albums', loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule)},
  { path: 'view-posts/:id', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
