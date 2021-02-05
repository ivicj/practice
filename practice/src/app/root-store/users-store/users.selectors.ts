import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { pipe } from "rxjs";
import { filter, map } from "rxjs/operators";
import { UsersState } from ".";

export const selectUsersState = createFeatureSelector<UsersState.State>('Users');

export const selectProjectedUsersState = createSelector(
    selectUsersState,
    state => state && state.users.length ? state : null
);

export const selectProjectedUsers = createSelector(
    selectUsersState,
    state => state && state.users.length ? state.users : []
)

export const selectUsersData = pipe(
    select(selectProjectedUsers),
    // filter(users => !!users.length),
    map(users => users)
);