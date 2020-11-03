import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './modules/users/users.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  { path: 'albums', loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
