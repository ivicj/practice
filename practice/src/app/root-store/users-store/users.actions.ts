import { createAction, props } from "@ngrx/store";
import { User } from "src/app/modules/model/user";

export const LoadUsersDataRequestAction = createAction(
    '[Users] Load Users Data Request'
);

export const LoadUsersDataFailureAction = createAction(
    '[Users] Load Users Data Failure',
    props<{ error: string }>()
);

export const LoadUsersDataSuccessAction = createAction(
    '[Users] Load Users Data Success',
    props<{ users: User[] }>()
);
