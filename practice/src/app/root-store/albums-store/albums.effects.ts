import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, concatMap, filter, map, switchMap, withLatestFrom } from "rxjs/operators";
import { AlbumsService } from "src/app/modules/albums/albums.service";
import { Album } from "src/app/modules/model/album";
import { RootStoreState } from "..";
import * as albumsActions from './albums.actions';
import { AlbumsSelectors } from '.';

@Injectable()
export class AlbumsEffects {
    constructor(
        private actions$: Actions,
        private albumsService: AlbumsService,
        private store$: Store<RootStoreState.State>
    ) { }

    loadAlbumsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(albumsActions.LoadAlbumsDataRequestAction),
            withLatestFrom(this.store$.pipe(AlbumsSelectors.selectAlbumsData)),
            filter(([action, albums]) => !albums.length),
            switchMap(() => this.albumsService.GetAlbums().pipe(
                map((fetchedAlbumsData: Album[]) =>
                    albumsActions.LoadAlbumsDataSuccessAction({ albums: fetchedAlbumsData })
                ),
                catchError(error => of(albumsActions.LoadAlbumsDataFailureAction({ error })))
            )
            )
        )
    );
}