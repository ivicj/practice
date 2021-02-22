import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AlbumsEffects } from "./albums.effects";
import { albumsReducer } from "./albums.reducers";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('Albums', albumsReducer),
        EffectsModule.forFeature([AlbumsEffects])
    ],
    providers: [AlbumsEffects]
})
export class AlbumsStoreModule {

}