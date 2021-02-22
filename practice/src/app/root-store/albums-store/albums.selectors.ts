import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { pipe } from "rxjs";
import { filter, map } from "rxjs/operators";
import { AlbumsState } from ".";

export const selectAlbumsState = createFeatureSelector<AlbumsState.State>('Albums');

export const selectProjectedAlbumsState = createSelector(
    selectAlbumsState,
    state => state && state.albums.length ? state : null
);

export const selectProjectedAlbums = createSelector(
    selectAlbumsState,
    state => state && state.albums.length ? state.albums : []
)

export const selectAlbumsData = pipe(
    select(selectProjectedAlbums),
    map(albums => albums)
);
