import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostsService } from 'src/app/modules/posts/posts.service';
import * as postsActions from './posts.actions';
import { Post } from 'src/app/modules/model/post';
import { RootStoreState } from '..';
import { PostsSelectors } from '.';
import { PostsForStoreModel } from 'src/app/modules/model/posts-for-store.model';

@Injectable()
export class PostsEffects {

    constructor(
        private actions$: Actions,
        private postsService: PostsService,
        private store$: Store<RootStoreState.State>
    ) { }

    loadPostsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(postsActions.LoadPostsDataRequestAction),
            // withLatestFrom(this.store$.pipe(PostsSelectors.selectPostsData)),
            // filter(([_, posts]) => !posts.length),
            switchMap(() => this.postsService.GetPosts().pipe(
                map((fetchedPostsData: Post[]) => {
                    const posts: PostsForStoreModel[] = fetchedPostsData.reduce((accumulator, currentValue) => {
                        const foundPostByUserId = accumulator.find(previous => previous.userId === currentValue.userId);
                        if (!foundPostByUserId) {
                            accumulator.push({ userId: currentValue.userId, posts: [currentValue] });
                        } else if (foundPostByUserId) {
                            foundPostByUserId.posts.push(currentValue);
                        }
                        return accumulator;
                    },
                        [] as PostsForStoreModel[]);
                    return postsActions.LoadPostsDataSuccessAction({ posts })
                }),
                catchError(error => of(postsActions.LoadPostsDataFailureAction({ error })))
            ))
        )
    )

    loadPostsByUserIdEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(postsActions.LoadPostsByUserIdDataRequestAction),
            withLatestFrom(this.store$.pipe(PostsSelectors.selectPostsData)),
            filter(([action, posts]) => !posts.filter(post => post.userId == action.userId).length),
            switchMap((action) => this.postsService.GetPostsByUserId(action[0].userId).pipe(
                map((fetchedPostsByUserIdData: Post[]) =>
                    postsActions.LoadPostsByUserIdDataSuccessAction({ posts: fetchedPostsByUserIdData })
                ),
                catchError(error => of(postsActions.LoadPostsByUserIdDataFailureAction({ error })))
            )
            )
        )
    );

}
