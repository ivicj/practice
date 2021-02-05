import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { UsersEffects } from "./users.effects";
import { usersReducer } from "./users.reducer";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('Users', usersReducer),
        EffectsModule.forFeature([UsersEffects])
    ],
    providers: [UsersEffects]
})
export class UsersModule {

}