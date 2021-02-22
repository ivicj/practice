import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AlbumsStoreModule } from "./albums-store/albums.store.module";
import { PostsStoreModule } from "./posts-store/posts.store.module";
import { UsersStoreModule } from "./users-store/users.store.module";

@NgModule({
  imports: [
    CommonModule,
    UsersStoreModule,
    PostsStoreModule,
    AlbumsStoreModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }