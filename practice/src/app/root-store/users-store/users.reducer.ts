import { createReducer, on, Action } from "@ngrx/store";
import { UsersActions, UsersState } from ".";

const reducer = createReducer(
    UsersState.initialState,
    on(UsersActions.LoadUsersDataRequestAction, state => ({
        ...state,
        isLoading: true,
        error: null

    })),
    on(UsersActions.LoadUsersDataFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error
    })),
    on(UsersActions.LoadUsersDataSuccessAction, (state, { users }) => ({
        ...state,
        isLoading: false,
        error: null,
        users: users
    }))
);

export function usersReducer(state: UsersState.State, action: Action) {
    return reducer(state, action);
  }
  