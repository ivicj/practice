import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsComponent } from '../albums/albums.component';
import { AlbumsModule } from '../albums/albums.module';
import { CommentsComponent } from '../comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    AlbumsModule
  ],
  declarations: [
    PostsComponent,
    CommentsComponent
  ],
  exports: [PostsComponent,
    CommentsComponent]
})
export class PostsModule { }
