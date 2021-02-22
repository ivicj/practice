import { createReducer, on, Action } from "@ngrx/store";
import { AlbumsActions, AlbumsState } from ".";

const reducer = createReducer(
    AlbumsState.initialState,
    on(AlbumsActions.LoadAlbumsDataRequestAction, state => ({
        ...state,
        isLoading: true,
        error: null

    })),
    on(AlbumsActions.LoadAlbumsDataFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error
    })),
    on(AlbumsActions.LoadAlbumsDataSuccessAction, (state, { albums }) => ({
        ...state,
        isLoading: false,
        error: null,
        albums: albums
    }))
);

export function albumsReducer(state: AlbumsState.State, action: Action) {
    return reducer(state, action);
  }
  