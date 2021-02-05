import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/modules/users/users.service';
import * as usersActions from './users.actions';
import { User } from 'src/app/modules/model/user';
import { RootStoreState } from '..';
import { UsersSelectors } from '.';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersService: UsersService,
        private store$: Store<RootStoreState.State>
    ) { }

    loadUsersEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(usersActions.LoadUsersDataRequestAction),
            withLatestFrom(this.store$.pipe(UsersSelectors.selectUsersData)),
            filter(([action, users]) => !users.length),
            switchMap(() => this.usersService.GetUsers().pipe(
                map((fetchedUsersData: User[]) =>
                    usersActions.LoadUsersDataSuccessAction({ users: fetchedUsersData })
                ),
                catchError(error => of(usersActions.LoadUsersDataFailureAction({ error })))
            )
            )
        ));

}
