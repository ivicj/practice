import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { UsersModule } from "./users-store/users.module";

@NgModule({
    imports: [
        CommonModule,
        UsersModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
    ]
})
export class RootStoreModule { }