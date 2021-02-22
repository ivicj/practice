import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PostsEffects } from './posts.effects';
import { postsReducer } from "./posts.reducers";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('Posts', postsReducer),
        // StoreModule.forFeature('PostsByUserId', postsByUserIdReducer),
        EffectsModule.forFeature([PostsEffects])
    ],
    providers: [PostsEffects]
})
export class PostsStoreModule {

}