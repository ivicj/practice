import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './modules/nav-menu/nav-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './modules/users/users.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreModule } from './root-store/root-store.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PostsComponent } from './modules/posts/posts.component';
import { environment } from 'src/environments/environment';
import { AlbumsModule } from './modules/albums/albums.module';
import { CommentsComponent } from './modules/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RootStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  entryComponents: [
    PostsComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
